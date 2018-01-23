import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ItemBill, CustomerBill } from '../../shared/item-bill.modal';
import { GstService } from '../../shared/gstService';
/**
 * Generated class for the BillDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-bill-detail',
  templateUrl: 'bill-detail.html',
})
export class BillDetailPage{
  grandTotal:number;
  count: number;
  currentItems: ItemBill[];
  clickedItem:ItemBill;
  yourName: number;
  user:CustomerBill;
  gst: number;
  gstValue:number;
  netTotal:number;
  discount:number;

  constructor(public navCtrl: NavController,
               public navParams: NavParams, 
               private alertCtrl: AlertController,
              public gstService:GstService) {
                        this.currentItems=[];
                        this.count=0;
                        this.gst=this.gstService.getGst();
                        this.grandTotal=0;
                        this.user=this.navParams.data;
  }
  changed(i:number){
    this.netTotal=0;
    this.discount=0;
    this.gstValue=0;
    let index : number=i-1;
    this.currentItems[index].total=(+this.currentItems[index].quantity)*(+this.currentItems[index].rate);
    this.discount= this.currentItems[index].total*(( +this.currentItems[index].discount)/100);
    this.currentItems[index].total= this.currentItems[index].total-this.discount;
    // console.log(this.currentItems[index]);
    this.grandTotal=0;
    for(let item of this.currentItems){
      this.netTotal+=item.total;
    }
    this.netTotal=+(this.netTotal.toFixed(2));
    this.gstValue=(this.gst*this.netTotal)/100;
    this.gstValue=+(this.gstValue.toFixed(2))
    this.grandTotal=this.netTotal+this.gstValue;
    this.grandTotal=+(this.grandTotal.toFixed(2));

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BillDetailPage');
  }
  addAnItem(){
    this.count=this.count+1;
    var temp = {serialNo: this.count, itemNo:null, itemName: null, quantity:null , rate:null , discount:null , total:null };
    this.currentItems.push(temp);
    // console.log(this.currentItems);

  }
  deleteAnItem(index:number){
    index=index-1;
    console.log(index);
    console.log(this.count);
    let deletedTotal:number= this.currentItems[index].total;
    this.netTotal=this.netTotal-deletedTotal;
    this.netTotal=+(this.netTotal.toFixed(2));
    this.gstValue=(this.gst*this.netTotal)/100;
    this.gstValue=+(this.gstValue.toFixed(2))
    this.grandTotal=this.netTotal+this.gstValue;
    this.grandTotal=+(this.grandTotal.toFixed(2));

    this.currentItems.splice(index, 1);
    
    this.count=this.count-1;
    for(let i=index;i<this.count;i++){
      this.currentItems[i].serialNo=this.currentItems[i].serialNo-1;
      console.log("changed"+i);
      
    }
    
  }

    reset() {
      let alert = this.alertCtrl.create({
        title: 'Confirm reset',
        message: 'Do you want to reset?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              this.count=0
              this.currentItems=[];
              console.log('Buy clicked');
            }
          }
        ]
      });
      alert.present();
    }
   
  

}
