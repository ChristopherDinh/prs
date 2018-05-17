import { user } from '../model/user';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

const url: string = 'http://localhost:8080/Users/';

@Injectable()
export class UserService {

 login(uName, password): Observable<user[]> {
		return this.http.get(url + "Authenticate?uname=" + uName + "&password=" + password) as Observable<user[]>;
  }
	constructor(private http: HttpClient) {}
	
	list(): Observable <user[]> {
	return this.http.get(url+'List') as Observable<user[]>;
	}
  
  create(user:user):Observable<any> {
    console.log('Usersvc.create...');
    return this.http.post(url+'Add', user) as Observable<any>;
  }
  
	get(id): Observable<user[]> {
	return this.http.get(url+'Get?id='+id) as Observable<user[]>;
	}
  
  remove(id): Observable<any> {
      return this.http.get(url+"Remove?id="+id) as Observable<any>;
  }  
  change(user: user): Observable<any> {
		return this.http.post(url + "Change", user) as Observable<any>;
  }
}
