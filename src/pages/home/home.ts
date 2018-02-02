import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BillPage } from '../bill/bill';
import { GstService } from '../../shared/gstService';
import { SettingsPage } from '../settings/settings';
import { ProductsPage } from '../products/products';
import { FetchBillPage } from '../fetch-bill/fetch-bill';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    gst:number;

  pages: Array<{title: string, component: any}>;
  
    constructor(public navCtrl: NavController, public gstService: GstService) {
      
      
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Bill', component: BillPage },
        { title: 'Fetch Bill', component: FetchBillPage },
        { title: 'Products', component: ProductsPage },
        { title: 'Settings', component: SettingsPage }
      ];
  
    }
  
  
  
    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      // if(page.title=="Home"){
      //   this.navCtrl.popToRoot();
      // }
      // else{
      //   this.navCtrl.push(page.component);
      // }
      
      this.navCtrl.setRoot(page.component);
    }

    onSetGst(){
      this.gstService.setGst(this.gst);
    }
    
  }
  


