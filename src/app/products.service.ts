import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/model/product.model';
import * as data from '../assets/menu.json';



@Injectable(
  { providedIn: 'root'}
  )

export class ProductsService {

  private products: Products[];

  constructor(
    // private httpClient:HttpClient
    ) { }

  // getProducts(): Observable<Products[]> {
  //   return this.httpClient.get<Products[]>(`${this.apiURL}/data/`);
  // }
}
console.log(data);



