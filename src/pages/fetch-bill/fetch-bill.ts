import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductApiService } from '../../shared/productApi.service';
import { Bill } from '../../shared/item-bill.modal';
import { BillViewPage } from '../bill-view/bill-view';

/**
 * Generated class for the FetchBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fetch-bill',
  templateUrl: 'fetch-bill.html',
})
export class FetchBillPage {
  billNo:number;
  currentBill: Bill;
  constructor(public navCtrl: NavController, public navParams: NavParams,public productApiService: ProductApiService) {
    this.billNo=null;
    //this.currentBill={ user:null, items: null, total:null, gst:null};
    this.currentBill=null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchBillPage');
  }
  fetchBill(currentBillNo:number){
    console.log(currentBillNo);
    this.productApiService.fetchBill(currentBillNo).subscribe(data => {
      // console.log("status"+data.status);
      this.currentBill = data.json();
      this.navCtrl.push(BillViewPage,this.currentBill);
    });
    //console.log("Der" +this.currentBill.items[0].itemName);
    // if(this.currentBill!=null){
    //   this.navCtrl.push(BillViewPage,this.currentBill);
    // }
    // else{
    //   console.log("cant fetch");
    // }
  }

}
