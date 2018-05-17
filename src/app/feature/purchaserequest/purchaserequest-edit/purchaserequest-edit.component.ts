import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaserequestService } from '../../../service/purchaserequest.service';
import { purchaserequest } from '../../../model/purchaserequest';
import {user} from '../../../model/user';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent implements OnInit {

title: string = 'Purchase Request Edit';
  id:string;
  resp:any;
  purchaserequest:purchaserequest;
  users:user[];
  
  change() {
    console.log(this.purchaserequest); this.prSvc.change(this.purchaserequest).subscribe(resp => { this.resp = resp; console.log('purchaserequest-change', this.resp);this.router.navigate(['/purchaserequest/list']);});
  }
  constructor(private prSvc: PurchaserequestService, private router:Router, private route:ActivatedRoute, private uSvc: UserService) { }
  compareFn(v1:number, v2:number):boolean {
    return v1===v2;
  }
  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']); this.uSvc.list().subscribe(users => this.users = users); this.prSvc.get(this.id).subscribe(purchaserequest => {this.purchaserequest = purchaserequest.length > 0 ? purchaserequest[0] : null; console.log(this.purchaserequest);});
}
}