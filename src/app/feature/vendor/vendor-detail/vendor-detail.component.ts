import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../../service/vendor.service';
import { vendor } from '../../../model/vendor';
@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
title: string = 'Vendor Detail';
vendor:vendor;
  constructor(private vSvc: VendorService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => {let id = parms['id']; this.getVendorById(id);});
  }
  getVendorById(id) {
    this.vSvc.get(id).subscribe(vendors => {this.vendor = vendors.length > 0 ? vendors[0] : null; console.log('Vendor:', this.vendor);});
  }
  remove():void {
    this.vSvc.remove(this.vendor.Id).subscribe(res => { console.log(res); this.router.navigateByUrl('/vendor/list');});
  }

}