import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bill } from '../../shared/item-bill.modal';
import { HomePage } from '../home/home';

/**
 * Generated class for the BillViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bill-view',
  templateUrl: 'bill-view.html',
})
export class BillViewPage {
  currentBill:Bill;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.currentBill={ user:null, items: null, total:null, gst:null};
    this.currentBill=this.navParams.data;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillViewPage');
    
  }
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
