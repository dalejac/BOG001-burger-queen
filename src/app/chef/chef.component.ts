import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Order } from '../model/order.model';
import { Observable } from 'rxjs';


@Component({
      selector: 'app-chef',
      templateUrl: './chef.component.html',
      styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

      status = true;
      text = 'Pending';

      order$: Observable<Order[]>;

      constructor(private firestore: FirestoreService) { console.log("componente cargado"); }


      ngOnInit(): void {
            this.getAll()
      }

      getAll(): void {
            this.order$ = this.firestore.getAll();
      }

      changeStatus(orders): void {
            this.status = !this.status;
            if (!this.status) {
                  this.text = 'Done';
            } else {
                  this.text = 'Pending';
            }
      }
}