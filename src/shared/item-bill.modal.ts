export class ItemBill{
    serialNo:number;
    itemNo:number;
    itemName: string;
    quantity:number;
    rate:number;
    discount:number;
    total:number;
}
export class CustomerBill{
    billNo:number;
    billDate:Date;
    customeName:string;
    customerAddress:string;
    mobileNo:number;
}
export class Product{
    price:number;
    productId:number;
    productName:string;

}
