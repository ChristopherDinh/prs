import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';
import {vendor} from '../../../model/vendor';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

title: string = 'Product Detail';
product:product;
  constructor(private pSvc: ProductService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => {let id = parms['id']; this.getProductById(id);});
  }
  getProductById(id) {
    this.pSvc.get(id).subscribe(products => {this.product = products.length > 0 ? products[0] : null; console.log('Product:', this.product);});
  }
  remove():void {
    this.pSvc.remove(this.product.Id).subscribe(res => { console.log(res); this.router.navigateByUrl('/product/list');});
  }

}