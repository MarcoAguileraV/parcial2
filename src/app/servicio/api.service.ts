import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';

import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }

  apiUrl = 'https://dummyjson.com'



  constructor(private http : HttpClient) {}


  getProducts():Observable<any>{
    return this.http.get(`${this.apiUrl}/products/`).pipe(
    retry(3)
    );
  }

  getUsers():Observable<any>{
    return this.http.get(this.apiUrl+'/users/').pipe(
    retry(3)
    );
  }

  CreateProduct(post):Observable<any>{
    return this.http.post(this.apiUrl+'/products',post,this.httpOptions)
    .pipe(
      retry(3)
    );
  }

  CreateUser(post):Observable<any>{
    return this.http.post(this.apiUrl+'/users',post,this.httpOptions)
    .pipe(
      retry(3)
    );
  }

  getProductos(id):Observable<any>{
    return this.http.get(this.apiUrl+'/products'+id).pipe(
      retry(3)
    );
  }


  getUser(id):Observable<any>{
    return this.http.get(this.apiUrl+'/users'+id).pipe(
      retry(3)
    );
  }




}
