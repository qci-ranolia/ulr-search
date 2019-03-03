import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'
import { Router } from '@angular/router'
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {
  token : string
  headers : any
  opts : any
  request : any

  localJSON: string = "localhost:3000/"



  Header: any;
  appHeader: any = new HttpHeaders({ 'Autherization'  : 'true' });


  constructor( private http: HttpClient, private router: Router) { }

  /* get_api() {
    return this.http.get(this.URL + 'lms/employeeDetails' ).map(r => r.json())
  }

  post_api(data: any) {
    return this.http.get(this.URL + 'lms/employeeDetails', data ).map(r => r.json())
  } */
  
  // loc() {
  //   // this.setHeader();
  //   const request = new HttpRequest('GET', this.localJSON, { reportProgress: true /*, headers:this.appHeader */ });
  //   return this.http.request(request)
  // }

}