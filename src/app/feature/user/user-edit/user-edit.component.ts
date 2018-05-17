import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { user } from '../../../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = 'User Edit';
  id:string;
  resp:any;
  user:user;
  
  change() {
    console.log(this.user); this.uSvc.change(this.user).subscribe(resp => { this.resp = resp; console.log('user-change', this.resp);this.router.navigate(['/user/list']);});
  }
  constructor(private uSvc: UserService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']); this.uSvc.get(this.id).subscribe(users => {this.user = users.length > 0 ? users[0] : null; console.log(this.user);});
  }

}
