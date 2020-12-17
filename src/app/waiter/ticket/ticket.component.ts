import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Order } from 'src/app/model/order.model';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  waiter = "";
  name = "";
  table = "";
  num = '00'+ Math.floor(Math.random() * 100)

  @Input() breakProduct: any[] = [];
  @Input() lunchProduct: any[] = [];

  contador = 1;

  constructor(private fireStore: FirestoreService) { }

  ngOnInit(): void {
  }

  rest(): void {
    this.contador --;  // debo condicionarlo
  }

  sum(): void {
    this.contador += 1;
  }

  deleteItem(i): void {
    this.breakProduct.splice(i, 1);
    console.log('Item eliminado');
    console.log(this.breakProduct);
  }

  deleteItems(i): void {
    this.lunchProduct.splice(i, 1);
    console.log('Item eliminado');
    console.log(this.lunchProduct);
  }
  
  orderPlaced(): void {
    const order: Order = {orderNum: this.num, waiter: this.waiter, table: this.table, customer: this.name, products: this.breakProduct.concat(this.lunchProduct)};
    this.fireStore.add(order);
    this.breakProduct.splice(0, this.breakProduct.length);
    this.lunchProduct.splice(0, this.lunchProduct.length);
    Swal.fire('Thank you...', 'Order sent succesfully!!', 'success');
  }
}
