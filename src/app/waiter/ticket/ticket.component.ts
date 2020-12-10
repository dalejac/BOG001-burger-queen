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

  @Input() products: string[];

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

  deleteItem(i: number): void {
    this.products.splice(i, 1);
    console.log('Item eliminado');
  }
}
