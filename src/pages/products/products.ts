import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductApiService } from '../../shared/productApi.service';
import { Product } from '../../shared/item-bill.modal';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ViewController } from 'ionic-angular/navigation/view-controller';

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
  public productLength:number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public productApiService: ProductApiService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {
      console.log("con parent");
  }

  ionViewDidLoad() {
    console.log("load parent");

    this.productApiService.getProducts().subscribe(data => {
      this.currentProducts = data;
      this.productLength=this.currentProducts.length;
      // console.log("ProductLength:"+this.productLength);
    });
  }
  


  editProduct(clickedProduct:Product) {
    let modal = this.modalCtrl.create(ModalPage,clickedProduct);
    modal.present();
    modal.onDidDismiss(data => {
      // console.log("new"+data.slNo);
      this.currentProducts[clickedProduct.slNo-1]=data;
      // let temp:Product=data;
      // this.productApiService.updateProduct(temp);
      // this.refresh();
      // this.navCtrl.setRoot(this.navCtrl.getActive().component);
      // console.log("clicked"+clickedProduct.productName);
    });
    

  }
  addAProduct(){
    this.productLength=this.productLength+1;
    var temp = {slNo: this.productLength, productId:null, productName: null, price:null };
    this.currentProducts.push(temp);
    // console.log(this.currentItems);
    let modal = this.modalCtrl.create(ModalPage,this.currentProducts[this.productLength-1]);
    modal.present();
    modal.onDidDismiss(data => {
      this.currentProducts[this.productLength-1]=data;
      // console.log("new"+data.slNo);
      // this.currentProducts[clickedProduct.slNo-1]=data;
      // let temp:Product=data;
      // this.productApiService.updateProduct(temp);
      // this.refresh();
      // this.navCtrl.setRoot(this.navCtrl.getActive().component);
      // console.log("clicked"+clickedProduct.productName);
    });

  }
  deleteAProduct(clickedProduct:Product){
    // this.productApiService.deleteProduct(clickedProduct);
    // this.navCtrl.setRoot(this.navCtrl.getActive().component); 
    //console.log("deleated") ;
    let index = clickedProduct.slNo-1;
    this.currentProducts.splice(index, 1);
    
    this.productLength=this.productLength-1;
    for(let i=index;i<this.productLength;i++){
      this.currentProducts[i].slNo=this.currentProducts[i].slNo-1;
      console.log("changed"+i);

    }
    this.productApiService.deleteProduct(this.currentProducts);
    

  }
  
}




@Component({
  selector: 'page-products-modal',
 templateUrl:'product.modal.html'
})
export class ModalPage {

  public selectedProduct:Product;
  public tempProduct:Product;
  public tempProduct1:Product;
  constructor(private navParms:NavParams,
              public viewCtrl: ViewController,
              public productApiService: ProductApiService){
    this.selectedProduct={slNo:null,productName:null,productId:null,price:null};
    this.tempProduct={slNo:null,productName:null,productId:null,price:null};
    this.selectedProduct=this.navParms.data;
   
   
   
   
  }

  ionViewDidLoad(){
    
    this.tempProduct=Object.assign({},this.selectedProduct);
  }
  cancel(){
    // console.log("sel"+this.tempProduct.productName);
  
    this.viewCtrl.dismiss(this.selectedProduct);
  }
  update(){
    //  this.selectedProduct=this.tempProduct;
    this.productApiService.updateProduct(this.tempProduct);
    this.viewCtrl.dismiss(this.tempProduct);
  }
  
}
