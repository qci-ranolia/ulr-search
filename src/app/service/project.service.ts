import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from './api.service'
import { Router } from '@angular/router'

@Injectable()
export class ProjectService {
  loader : boolean = false
  
  // Emitters
  emitsload = new EventEmitter<any>()
  emithload = new EventEmitter<any>()

  constructor( private _api: ApiService, private router_: Router ) {
    
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

}
