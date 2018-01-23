import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BillDetailPage } from '../bill-detail/bill-detail';
import { MyApp } from '../../app/app.component';
import { CustomerBill } from '../../shared/item-bill.modal';
import { GstService } from '../../shared/gstService';

/**
 * Generated class for the BillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html',
})
export class BillPage {
  ac: MyApp;
   private gst:number;
  customerBill: CustomerBill;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customerBill= {billNo: 0, billDate: null, customeName: null, customerAddress:null , mobileNo:null };
    
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BillPage');
    
  }
  billUser(){
    this.navCtrl.push(BillDetailPage,this.customerBill);
  }

}
