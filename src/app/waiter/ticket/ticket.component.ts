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

  @Input() product: any;

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

  deleteItem(): void {
    console.log('Item eliminado');
  }
}
