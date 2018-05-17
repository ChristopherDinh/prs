import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '../../../service/purchaserequest.service';
import { purchaserequest } from '../../../model/purchaserequest';
import { UserService } from '../../../service/user.service';
import { user } from '@model/user';
import { SystemService } from '../../../service/system.service';
import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaserequestReviewComponent implements OnInit {
  title: string = 'PurchaseRequest Review';
  requests: purchaserequest[] = [];
  sortBy: string = "Id";
  authenticatedUser: user;
  
  constructor(private prSvc: PurchaserequestService, private sysSvc: SystemService) { }

  ngOnInit() {
    this.authenticatedUser = this.sysSvc.data.user.instance;
    console.log("userid = "+this.authenticatedUser.Id);
    this.prSvc.listForReview(this.authenticatedUser.Id).subscribe(prs => {
      this.requests = prs;
      this.populateUserName();
  	});
  }
  
  populateUserName(): void {
    for (let pr of this.requests) {
      pr.UserName = pr.User.UserName;
    }
  }
  
  setSortBy(column: string): void {
    this.sortBy = column;
  }
}