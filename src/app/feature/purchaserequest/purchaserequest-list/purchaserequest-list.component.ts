import { Component, OnInit } from '@angular/core';
import {purchaserequest} from '../../../model/purchaserequest';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import {user} from '../../../model/user';
import { SystemService } from '../../../service/system.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {
  purchaserequests: purchaserequest[];
  title:string ='This is the purchase requests list';
  
 constructor(private prSvc: PurchaserequestService, private uSvc:UserService, private sysSvc:SystemService) 
 { }

  ngOnInit() {
    this.prSvc.list().subscribe(purchaserequests => {
     this.purchaserequests = purchaserequests; 
     this.populateUserName();
    });
 
  }
populateUserName(): void {
    for (let pr of this.purchaserequests) {
      pr.UserName = pr.User.UserName;
    }
  
}
}