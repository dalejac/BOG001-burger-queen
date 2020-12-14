import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  waiter: string;
  name: string;
  table: number;

  @Input() product: [any];
  @Input() Product: [any];

  contador = 1;

  constructor() { }

  ngOnInit(): void {
  }

  rest(): void {
    this.contador --;  // debo condicionarlo
  }

  sum(): void {
    this.contador += 1;
  }

  deleteItem(product, i): void {
    this.product.splice(i, 1);
    console.log('Item eliminado');
    console.log(this.product);
  }

  deleteItems(Product, i): void {
    this.Product.splice(i, 1);
    console.log('Item eliminado');
    console.log(this.Product);
  }

  orderPlaced(): void {
    alert('Order has been sent!');
  }
}
