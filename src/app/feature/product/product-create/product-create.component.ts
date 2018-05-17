import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { vendor } from '../../../model/vendor';
import { VendorService } from '../../../service/vendor.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  title:string = 'Create Product';
  resp: any;
  product:product = new product();
  vendors:vendor[];
  
  create(){
    this.pSvc.create(this.product).subscribe(resp => {this.resp = resp;
    this.router.navigate(['/product/list']);
  });
  }
 
  constructor(private pSvc: ProductService,private vSvc: VendorService, private router:Router) {
  }

  ngOnInit() {
    this.vSvc.list().subscribe(vendors => this.vendors = vendors);
  }

}
