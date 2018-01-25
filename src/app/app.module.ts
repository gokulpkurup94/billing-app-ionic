import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BillPage } from '../pages/bill/bill';
import { BillDetailPage } from '../pages/bill-detail/bill-detail';
import { FormsModule } from '@angular/forms';
import { GstService } from '../shared/gstService';
import { SettingsPage } from '../pages/settings/settings';
import { ProductApiService } from '../shared/productApi.service';
import { ProductsPage } from '../pages/products/products';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BillPage,
    BillDetailPage,
    SettingsPage,
    ProductsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BillPage,
    BillDetailPage,
    SettingsPage,
    ProductsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GstService,
    ProductApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
