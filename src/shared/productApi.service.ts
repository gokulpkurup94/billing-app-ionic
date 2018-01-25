import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Product } from './item-bill.modal';

@Injectable()
export class ProductApiService {

  currentProducts: Product[];

  baseUrl: string="https://billing-app-ionic2.firebaseio.com";
  constructor( private http:Http) {

    //  this.getProducts().subscribe(data => {
    //    this.currentProducts = data;
    //  });

  }
  ngOnInit(){

  }
  getProducts():Observable<Array<Product>>{
  return this.http.get(`${this.baseUrl}/products.json`)
     .map((response:Response)=> {
        return response.json();
    });
}
}