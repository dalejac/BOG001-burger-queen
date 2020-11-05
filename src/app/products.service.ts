import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from '../assets/menu.json';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  
  getProducts(): Observable<Array<Products>> {
    return (data as any).Menu;
  }
}


