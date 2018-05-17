import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {purchaserequest} from '../../../model/purchaserequest';
import {PurchaserequestService} from '../../../service/purchaserequest.service';
import { user } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

 title:string = 'Create Purchase Request';
  resp: any;
  purchaserequest:purchaserequest = new purchaserequest();
  users:user[];
  
  create(){
    this.prSvc.create(this.purchaserequest).subscribe(resp => {this.resp = resp;
  this.router.navigate(['/purchaserequest/list']);
  });
  }
 
  constructor(private prSvc: PurchaserequestService,private uSvc: UserService, private router:Router, private sysSvc:SystemService ) {
  }

  ngOnInit() {
   if(this.sysSvc.data.user.loggedIn) {
  		this.purchaserequest.User = this.sysSvc.data.user.instance;
  	} else {
  		console.error("User not logged in.");
  	}

}
}