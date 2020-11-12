import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/product.model';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

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
