import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,  Headers } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Product, ItemBill, CustomerBill, Bill } from './item-bill.modal';

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
       console.log("response"+response.json());
        return response.json();
    });
}
updateProduct(currentProduct: Product) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  // console.log("post current"+currentProduct.productName);
  return this.http.put(`${this.baseUrl}/products/${currentProduct.slNo-1}.json`, JSON.stringify(currentProduct) , options)
    .map(res => {
      res.json();
      console.log("response"+res.json());
    })
    .toPromise();
}
deleteProduct(currentProducts: Product[]){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.put(`${this.baseUrl}/products.json`,JSON.stringify(currentProducts) , options)
  .toPromise()
  .then(() => null);
}
saveBill(currentBill:Bill){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.put(`${this.baseUrl}/bills/${currentBill.user.billNo}.json`,JSON.stringify(currentBill) , options)
  .toPromise()
  .then(() => null);

}
fetchBill(billNumber: number){
  return this.http.get(`${this.baseUrl}/bills/${billNumber}.json`)
  .map((response:Response)=> {
    console.log("response"+response);
     return response;
 });
}
}