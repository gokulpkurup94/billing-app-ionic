import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GstService } from '../../shared/gstService';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  gst:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public gstService:GstService) {
    console.log("custructor"); 
    this.gst=this.gstService.getGst();
  }
  changed( passedGst :number ){
    
    this.gstService.setGst(passedGst);
  }
  ionViewDidLoad() {
    this.gst=this.gstService.getGst();
    console.log('ionViewDidLoad SettingsPage');
  }

}
