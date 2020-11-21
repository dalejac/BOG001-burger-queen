import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  records: Menu;

  constructor(private apiService: ProductsService) { }

  ngOnInit(): void {
    this.getData();
  }

getData(): void {
 this.apiService.getProducts().subscribe((data: Menu) => { this.records = data });
}
}
