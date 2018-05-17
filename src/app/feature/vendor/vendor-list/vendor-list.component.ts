import { Component, OnInit } from '@angular/core';
import {vendor} from '../../../model/vendor';
import {VendorService} from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: vendor[];
  title:string ='This is the vendor list';
 
  constructor(private vSvc: VendorService) { }

  ngOnInit() {
    this.vSvc.list().subscribe(vendors => {console.log(vendors); this.vendors = vendors;});
  }

}
