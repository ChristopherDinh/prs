import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { PurchaserequestService } from '@svc/purchaserequest.service';
import { PrliService } from '@svc/prli.service';
import { purchaserequest } from '@model/purchaserequest';
import { prli } from '@model/prli';
import { product } from '@model/product';


@Component({
  selector: 'app-purchaserequest-line',
  templateUrl: './purchaserequest-line.component.html',
  styleUrls: ['./purchaserequest-line.component.css']
})

export class PurchaserequestLineComponent implements OnInit {
  title: string = 'Purchase Request Line Items';
  id: string;
  prliId: string = '0';
  PR: purchaserequest;
  line: prli[];
  resp;

  submitForReview() {
    this.prSvc.submitForReview(this.PR)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
      });

  }

  constructor(private prSvc: PurchaserequestService,
  						private prliSvc: PrliService,
  						private router: Router,
  						private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	/*this.route.params.subscribe(parms => this.prliId = parms['del']);*/
    console.log("line called...id="+this.id+", prliId="+this.prliId);
  	this.prSvc.get(this.id).subscribe(purchaserequests => {this.PR = purchaserequests.length > 0 ? purchaserequests[0] : null;
      }
    );

    
  	this.prliSvc.listByPR(this.id)
  		.subscribe(prlis => {
        this.line = prlis;
      }
    );
  }
  


}