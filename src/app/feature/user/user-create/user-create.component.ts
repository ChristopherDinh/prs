import { Component, OnInit } from '@angular/core';
import { user } from '../../../model/user';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title:string = 'User Create';
  resp: any;
  user:user = new user();
  
  create(){
    console.log('Create user');
    console.log(this.user);
    this.uSvc.create(this.user).subscribe(resp => {this.resp = resp; 
    console.log('User-create:',this.resp);
    this.router.navigate(['/user/list']);
  });
  }
 
  constructor(private uSvc: UserService, private router:Router) { }

  ngOnInit() {
  }

}
