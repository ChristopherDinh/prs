import { Component, OnInit } from '@angular/core';
import {user} from '../../../model/user';
import {UserService} from '../../../service/user.service';
import {SortPipe} from  '../../../pipe/sort.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users: user[];
  title:string ='This is the user list';
  sortBy: string = 'Id';
 
	constructor(private uSvc: UserService) {
	}

  ngOnInit() {
		this.uSvc.list().subscribe(users => {console.log(users); this.users = users;});
	}
 setSortBy(column: string): void {
  this.sortBy = column;
 }
}
