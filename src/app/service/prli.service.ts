import { prli } from '../model/prli';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const url: string = 'http://localhost:8080/PurchaseRequestLineItems/'

@Injectable()
export class PrliService {

	constructor(private http: HttpClient) {}
	
	list(): Observable <prli[]> {
	return this.http.get(url+'List') as Observable<prli[]>;
	}
 
  listByPR(id): Observable<prli[]> {
        return this.http.get(url+"LineForPR?id="+id) as Observable<prli[]>;
    }
  create(prli:prli):Observable<any> {
    console.log('Prlisvc.create...');
    console.log(prli);
    return this.http.post(url+'Add', prli) as Observable<any>;
  }
  
	get(id): Observable<prli[]> {
	return this.http.get(url+'Get?id='+id) as Observable<prli[]>;
	}
  
  remove(id): Observable<any> {
      return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  
  change(prli: prli): Observable<any> {
		return this.http.post(url+"Change", prli) as Observable<any>;
  }
}
