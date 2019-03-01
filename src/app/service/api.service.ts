import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {
  URL: string = "http://192.168.15.214:3000/"

  constructor(private http: Http, private router: Router) { }

  /* get_api() {
    return this.http.get(this.URL + 'lms/employeeDetails' ).map(r => r.json())
  }

  post_api(data: any) {
    return this.http.get(this.URL + 'lms/employeeDetails', data ).map(r => r.json())
  } */

}