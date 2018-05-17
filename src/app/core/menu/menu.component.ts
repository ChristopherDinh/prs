import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	menuItems: Menu[] = [
		new Menu('Home', '/home', 'Home'),
		new Menu('User', '/user/list', 'User'),
    new Menu('Vendor', '/vendor/list', 'Vendor'),
    new Menu('Product', '/product/list', 'Product'),
    new Menu('Purchase Request', '/purchaserequest/list', 'Purchase Request'),
    new Menu('Review', '/purchaserequest/review', 'Review'),
		new Menu('About', '/about', 'About')
	];
  constructor() { }

  ngOnInit() {
  }

}
