import {purchaserequest} from './purchaserequest';
import {product} from './product';

export class prli {
 Id: number;
 PurchaseRequest: purchaserequest;
 Product: product;
 Quantity: number;
 
 about(): string {
	 return('Purchase Request = ' + this.PurchaseRequest)
	}
 constructor(Id:number=0, PurchaseRequest: purchaserequest =null, Product: product =null, Quantity:number = 0) {
  this.Id=Id;
  this.PurchaseRequest= PurchaseRequest;
  this.Product=Product;
  this.Quantity=Quantity;
 } 
}