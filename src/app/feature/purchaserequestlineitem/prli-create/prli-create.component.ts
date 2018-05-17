import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrliService } from '@svc/prli.service';
import { prli } from '@model/prli';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { purchaserequest } from '@model/purchaserequest';
import { ProductService } from '@svc/product.service';
import { product } from '@model/product';
import { SystemService } from '@svc/system.service';
import { VendorService } from '@svc/vendor.service';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {

  title: string = 'Purchase Request Line Item Create';

  prid: number;
  resp: any;

  purchaserequest: purchaserequest;
  product: product;
  prli: prli = new prli(0,this.purchaserequest,this.product,0);
  products: product[];

  compareFn(u1: product, u2: product) {
      return u1 && u2 ? u1.Id == u2.Id : u1 == u2;
  }

  create() {
    this.prli.PurchaseRequest = this.purchaserequest;
    this.prliSvc.create(this.prli).subscribe(resp => {this.resp = resp;this.router.navigateByUrl('/purchaserequest/line/'+this.prid);});
  }

  constructor(private prliSvc: PrliService,
  						private PurchaseRequestSvc: PurchaserequestService, 
  						private ProductSvc: ProductService,
              private vSvc: VendorService,
  						private SysSvc: SystemService,
  						private route: ActivatedRoute,
  						private router: Router) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => {
  		this.prid = parms["id"];
  		this.PurchaseRequestSvc.get(this.prid).subscribe(purchaserequests => {this.purchaserequest = purchaserequests.length > 0 ? purchaserequests[0] : null;
  			});
  	});
  	this.ProductSvc.list().subscribe(products => {this.products = products;
      }
    );

  }

}
