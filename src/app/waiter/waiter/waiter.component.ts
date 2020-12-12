import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  viewMode = 'breakfast';

  clickItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
