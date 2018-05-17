import { product } from '../model/product';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const url: string = 'http://localhost:8080/Products/'

@Injectable()
export class ProductService {

	constructor(private http: HttpClient) {}
	
	list(): Observable <product[]> {
	return this.http.get(url+'List') as Observable<product[]>;
	}
  
  create(product:product):Observable<any> {
    console.log('Productsvc.create...');
    console.log(product);
    return this.http.post(url+'Add', product) as Observable<any>;
  }
  
	get(id): Observable<product[]> {
	return this.http.get(url+'Get?id='+id) as Observable<product[]>;
	}
  
  remove(id): Observable<any> {
      return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  
  change(product: product): Observable<any> {
		return this.http.post(url+"Change", product) as Observable<any>;
  }
}
