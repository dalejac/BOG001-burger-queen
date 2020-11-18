import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  private records: Menu;

  constructor(private apiService: ProductsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
   getData(): void {
    this.apiService.getProducts().subscribe((data: Menu) => this.records = data);
   }

}
