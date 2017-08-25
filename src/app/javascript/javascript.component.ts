import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styles: []
})
export class JavascriptComponent implements OnInit {
  _javascriptModule: Object;
  jsObjAsArray = ['Loading...'];
  jsObjAsKeys;

  constructor(private db: DatabaseService) { }

  toggle(obj) {
    obj.completed = !obj.completed;
  }

  ngOnInit() {
    this.db
      .arrOfModules()
      .subscribe( res => {
        this._javascriptModule = res[0];
        this.jsObjAsArray = Object.keys(this._javascriptModule).map((key) => this._javascriptModule[key]);
        this.jsObjAsKeys = Object.keys(this._javascriptModule);
      } )
  }

}
