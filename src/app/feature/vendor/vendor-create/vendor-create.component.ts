import { Component, OnInit } from '@angular/core';
import { vendor } from '../../../model/vendor';
import { Router } from '@angular/router';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  title:string = 'Vendor Create';
  resp: any;
  vendor:vendor = new vendor();
  
  create(){
    console.log('Create vendor');
    console.log(this.vendor);
    this.vSvc.create(this.vendor).subscribe(resp => {this.resp = resp; 
    console.log('Vendor-create:',this.resp);
    this.router.navigate(['/vendor/list']);
  });
  }
 
  constructor(private vSvc: VendorService, private router:Router) { }

  ngOnInit() {
  }

}
