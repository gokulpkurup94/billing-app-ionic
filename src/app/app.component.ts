import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { HTTP_PROVIDERS } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { BillPage } from '../pages/bill/bill';

import { SettingsPage } from '../pages/settings/settings';
import { ProductApiService } from '../shared/productApi.service';
import { ProductsPage } from '../pages/products/products';
import { FetchBillPage } from '../pages/fetch-bill/fetch-bill';

@Component({
  templateUrl: 'app.html',
providers: [
  ProductApiService
]

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;



  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen ) {

  console.log("home page constructor called");
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Bill', component: BillPage },
      { title: 'Fetch Bill', component: FetchBillPage },
      { title: 'Products', component: ProductsPage },
      { title: 'Settings', component: SettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  pages: Array<{title: string, component: any}>;




    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      // if(page.title=="Home"){
      //   this.navCtrl.popToRoot();
      // }
      // else{
      //   this.navCtrl.push(page.component);
      // }

      this.nav.setRoot(page.component);
    }
}
