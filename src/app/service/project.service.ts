import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from './api.service'
import { Router } from '@angular/router'
import { HttpEvent, HttpEventType, HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class ProjectService {
  // booleans
  loader : boolean = false

  // arrays
  header: any  = []
  rows: any  = []
  // Emitters
  emitsload = new EventEmitter<any>()
  emithload = new EventEmitter<any>()
  emitTable = new EventEmitter<any>()

  constructor( private api: ApiService, private router_: Router ) {
    
  }
  /* showLoader() {
    this.loader = true
    this.emitsload.emit(this.loader)
    setTimeout(() => this.hideLoader(), 1000)
  }
  hideLoader() {
    this.loader = false
    this.emithload.emit(this.loader)
  } */

  /* get_api() {
    this._api.get_api().subscribe(el => {
      if (el.success) console.log('emit data to who called')//this.emitgetEmployees.emit(el.data)
      else console.log('emit err to who called')// this.snackBars('Employee Details', 'Try again!')
    }, err => this.router_.navigate(['some error page'])
    )
  } */

  /* post_api(data:any) {
    this._api.post_api(data).subscribe(el => {
      if (el.success) console.log('emit data to who called')//this.emitgetEmployees.emit(el.data)
      else console.log('emit err to who called')// this.snackBars('Employee Details', 'Try again!')
    }, err => this.router_.navigate(['some error page'])
    )
  } */

  HttpEventResponse(event) {
    console.log(event)
    switch (event.type) {
      case HttpEventType.Sent:
        // console.log('Request started');
        break;
      case HttpEventType.ResponseHeader:
        // console.log('Headers received ->', event.headers);
        break;
      case HttpEventType.DownloadProgress:
        const loaded = Math.round(event.loaded / 1024);
        // console.log(`Downloading ${ loaded } kb downloaded`);
        break;
      case HttpEventType.Response:
        // console.log('Finished -> ', event.body);
        return event.body;
    }
  }

  loc() {
    // this.api.loc().subscribe((event: HttpEvent<any>) =>{
    //   let response = this.HttpEventResponse(event)
    //   if( response ){
        this.emitTable.emit({
          "header": ["ULR", "Filename", "Issuedate", "Expire"],
          "rows": [
            {
              "ulr": "ULR20190303000X1234",
              "filename": "some.pdf",
              "issuedate": "17/01/19",
              "expire": "17/03/19"
            },
            {
              "ulr": "ULR20190303000X1234",
              "filename": "some.pdf",
              "issuedate": "17/01/19",
              "expire": "17/03/19"
            }
          ]
        })
    //   } else {
    //     // console.log("loc table err");
    //   }
    // }, ( err:HttpErrorResponse) => {
    //   // this.emitError.emit(err.error.message)
    // })
  }


}
