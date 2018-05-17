import { vendor } from '../model/vendor';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const url: string = 'http://localhost:8080/Vendors/'

@Injectable()
export class VendorService {

	constructor(private http: HttpClient) {}
	
	list(): Observable <vendor[]> {
	return this.http.get(url+'List') as Observable<vendor[]>;
	}
  
  create(vendor:vendor):Observable<any> {
    console.log('Vendorsvc.create...');
    return this.http.post(url+'Add', vendor) as Observable<any>;
  }
  
	get(id): Observable<vendor[]> {
	return this.http.get(url+'Get?id='+id) as Observable<vendor[]>;
	}
  
  remove(id): Observable<any> {
      return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  
  change(vendor: vendor): Observable<any> {
		return this.http.post(url+"Change", vendor) as Observable<any>;
  }
}
