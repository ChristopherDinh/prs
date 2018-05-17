import { Component, OnInit } from '@angular/core';
import {product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';
import {vendor} from '../../../model/vendor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: product[];
  title:string ='This is the products list';
  constructor(private pSvc: ProductService) { }

  ngOnInit() {
    this.pSvc.list().subscribe(products => {console.log(products); this.products = products;});
  }

}
