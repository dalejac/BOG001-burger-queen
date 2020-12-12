import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/model/menu.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  records: Menu;

  @Output() itemClicked: EventEmitter<any> = new EventEmitter();

  orderItem = [];

  constructor(private apiService: ProductsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apiService.getProducts().subscribe((data: Menu) => this.records = data);
  }

  addItem(i, name, price ): void {
    const item = name + ' ' + price;
    const items = this.orderItem.push(item);
    this.itemClicked.emit(this.orderItem);
    console.log('Añadido a la orden');
    console.log(i, item, items, this.orderItem);
  }

}
