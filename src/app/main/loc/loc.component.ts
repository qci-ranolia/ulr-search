import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../service/project.service';

@Component({
  selector: 'app-loc',
  templateUrl: './loc.component.html',
  styleUrls: ['./loc.component.scss']
})
export class LocComponent implements OnInit {
  table: any;
  showData = false;
  get : any

  constructor( private _pro : ProjectService ) {
    this.get = this._pro.emitTable.subscribe(res=>{
      console.log(res);
      this.showData= true;
      this.table = res
    })

  }

  ngOnInit() {
    this._pro.loc()
  }

}
