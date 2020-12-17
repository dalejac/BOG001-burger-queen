import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Order } from '../model/order.model';
// import firebase from 'firebase/app';
// import Timestamp = firebase.firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private orderCollection: AngularFirestoreCollection<Order>;
  path = 'items';

  constructor(private firestore: AngularFirestore) {
    this.orderCollection = this.firestore.collection<Order>
      ('items');
  }

  getAll(): Observable<Order[]> {

    return this.orderCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Order;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }

  // getTime() {
  //   this.firestore.serverTimestamp()
  // }

  add(item: Order) {
    this.orderCollection.add(item);
  }

  update(id: string, item: Partial<Order>): Promise<any> {
    return this.firestore.doc(`${this.path}/${id}`).update(item);
  }

}
