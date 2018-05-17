import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { PrliService } from '@svc/prli.service';
import { prli } from '@model/prli';
import { ProductService } from '@svc/product.service';
import { product } from '@model/product';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { purchaserequest } from '@model/purchaserequest';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})
export class PrliEditComponent implements OnInit {

  title: string = 'Purchase Request Line Item Edit';

  id: string; 
  prid: string; 
  resp: any;

  prli: prli;
  products: product[];
  pr: purchaserequest;

  change() {
      this.prli.PurchaseRequest = new purchaserequest(+this.prid);
      this.prliSvc.change(this.prli)
          .subscribe(resp => {
      this.resp = resp;
      this.router.navigateByUrl('/purchaserequest/line/'+this.prid);
    });
  }

  compareFn(pid1: number, pid2: number): boolean {
      return pid1 === pid2;
  }

  constructor(private prliSvc: PrliService,
  						private pdtSvc: ProductService,
  						private router: Router,
  						private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => {
  		this.id = parms['id'];
  		this.prid = parms['prid'];
  	});
  	this.prliSvc.get(this.id)
      .subscribe(purchaserequestlineitems => {
          this.prli = purchaserequestlineitems.length > 0 ? purchaserequestlineitems[0] : null;
      });
  	this.pdtSvc.list()
      .subscribe(products => {
          this.products = products; 
      });
  }
}