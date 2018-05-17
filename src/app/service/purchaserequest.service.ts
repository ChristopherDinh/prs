import { purchaserequest } from '../model/purchaserequest';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const url: string = 'http://localhost:8080/PurchaseRequests/'

@Injectable()
export class PurchaserequestService {

	constructor(private http: HttpClient) {}
	
	list(): Observable <purchaserequest[]> {
	return this.http.get(url+'List') as Observable<purchaserequest[]>;
	}
  
 listForReview(id): Observable<purchaserequest[]> {
      return this.http.get(url+"ListReview?id="+id) as Observable<purchaserequest[]>;
  }
  create(purchaseRequest:purchaserequest):Observable<any> {
    console.log('PurchaseRequestsvc.create...');
    console.log(purchaseRequest);
    return this.http.post(url+'Add', purchaseRequest) as Observable<any>;
  }
  
	get(id): Observable<purchaserequest[]> {
	return this.http.get(url+'Get?id='+id) as Observable<purchaserequest[]>;
	}
  
  remove(id): Observable<any> {
      return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }
  submitForReview(purchaserequest: purchaserequest): Observable<any> {
        return this.http.post(url+"SubmitForReview", purchaserequest) as Observable<any>;
  }
  change(purchaserequest: purchaserequest): Observable<any> {
		return this.http.post(url+"Change", purchaserequest) as Observable<any>;
  }
 approve(purchaserequest: purchaserequest): Observable<any> {
      return this.http.post(url+"ApprovePR", purchaserequest) as Observable<any>;
  }
  
  reject(purchaserequest: purchaserequest): Observable<any> {
      return this.http.post(url+"RejectPR", purchaserequest) as Observable<any>;
  }
}
