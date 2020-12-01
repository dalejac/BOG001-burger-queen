import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() waiter: string;

  name: string;
  table: number;

  constructor() { }

  ngOnInit(): void {
  }

}
