import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { product } from '../../../model/product';
import { vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product Edit';
  id: string;
  resp: any;
  product: product;
  vendors:vendor[];
  
  change() {
    console.log(this.product); this.pSvc.change(this.product).subscribe(resp => { this.resp = resp; console.log('product-change', this.resp);this.router.navigate(['/product/list']);});
  }
  constructor(private pSvc: ProductService,private vSvc: VendorService, private router:Router, private route:ActivatedRoute) { }
  compareFn(v1:number, v2:number):boolean {
    return v1===v2;
  }
  ngOnInit() {
    this.route.params.subscribe(parms => this.id =parms['id']);this.vSvc.list().subscribe(vendors => this.vendors = vendors); this.pSvc.get(this.id).subscribe(products => {this.product = products.length > 0 ? products[0] : null; console.log(this.product);});
  }
  }