import {vendor} from './vendor';

export class product{
	Id: number;
	Vendor: vendor;
	VendorPartNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	Photopath: string;
	
	about(): string {
	 return('Product Name = ' + this.Name + 'Part Number ='+this.VendorPartNumber)
	}
	
	constructor(Id:number=0,vendor:vendor = null, PN:string = '', name:string = '', price:number = 0, unit:string = '', pp:string = '') {
		this.Id = Id;
    this.Vendor=vendor;
		this.VendorPartNumber = PN;
		this.Name = name;
		this.Price = price;
		this.Photopath = pp;
	}
}