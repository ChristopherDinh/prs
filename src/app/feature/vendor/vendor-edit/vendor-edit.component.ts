import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../../service/vendor.service';
import { vendor } from '../../../model/vendor';
@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {title: string = 'Vendor Edit';
  id:string;
  resp:any;
  vendor:vendor;
  
  change() {
    console.log(this.vendor); this.vSvc.change(this.vendor).subscribe(resp => { this.resp = resp; console.log('vendor-change', this.resp);this.router.navigate(['/vendor/list']);});
  }
  constructor(private vSvc: VendorService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']); this.vSvc.get(this.id).subscribe(vendors => {this.vendor = vendors.length > 0 ? vendors[0] : null; console.log(this.vendor);});
  }
  }