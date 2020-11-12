import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/product.model';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  private records: Products[];
  apiService: any;

  constructor() { }

  ngOnInit(): void {
  }

// tslint:disable-next-line: typedef
public getData() {
 this.apiService.getData().subscribe((data: Products[]) => this.records = data);
}
}
