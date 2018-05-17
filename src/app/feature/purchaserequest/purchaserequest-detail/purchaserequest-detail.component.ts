import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {purchaserequest} from '../../../model/purchaserequest';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {user} from '../../../model/user';
@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent implements OnInit {

title: string = 'Purchase Request Details';
purchaserequest:purchaserequest;
  constructor(private prSvc: PurchaserequestService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => {let id = parms['id']; this.getPurchaseRequestById(id);});
  }
  getPurchaseRequestById(id) {
    this.prSvc.get(id).subscribe(purchaserequest => {this.purchaserequest = purchaserequest.length > 0 ? purchaserequest[0] : null; console.log('Purchase Request: look at me', this.purchaserequest);});
  }
  remove():void {
    this.prSvc.remove(this.purchaserequest.Id).subscribe(res => { console.log(res); this.router.navigateByUrl('/purchaserequest/list');});
  }

}