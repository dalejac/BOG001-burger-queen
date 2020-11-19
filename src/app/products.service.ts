import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as data from '../assets/menu.json';
import { Menu } from './model/menu.model';




@Injectable(
  { providedIn: 'root'}
  )

export class ProductsService {

  private products: Menu;

  constructor(private httpClient: HttpClient) {

  }

  apiURL = '../assets/menu.json';

  getProducts(): Observable<Menu> {
    return this.httpClient.get<Menu>(`${this.apiURL}`);
  }
}
console.log(data);



