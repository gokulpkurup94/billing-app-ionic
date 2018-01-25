import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductApiService } from '../../shared/productApi.service';
import { Product } from '../../shared/item-bill.modal';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  private currentProducts: Product[];
  public currentProduct: Product;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public productApiService: ProductApiService,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');

    this.productApiService.getProducts().subscribe(data => {
      this.currentProducts = data;
    });
  }


  editProduct(clickedProduct:Product) {
    console.log(clickedProduct);
    let prompt = this.alertCtrl.create({
      
      title: 'Edit',
     
      inputs: [
        {
          label:"Product Name",
          value:`{{clickedProduct.productName}}`,


        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {  
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
