import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/model/menu.model';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  records: Menu;

  @Output() itemClicked: EventEmitter<any> = new EventEmitter();

  orderItems = [ ];

  constructor(private apiService: ProductsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apiService.getProducts().subscribe((data: Menu) => this.records = data);
  }

  // tabSelector(): void {

  // }

  // addItem(i, name, price ): void {
  //   const item = name + price;
  //   const items = this.orderItems.push(item);
  //   this.itemClicked.emit(items.toString());
  //   console.log('Añadido a la orden');
  //   console.log(i, item, items);
  // }

  addItem(i, name, price ): void {
    const item = name + price;
    this.itemClicked.emit(item);
    console.log('Añadido a la orden');
    console.log(i);
  }

}
