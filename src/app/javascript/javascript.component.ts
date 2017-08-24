import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styles: []
})
export class JavascriptComponent implements OnInit {
  _javascriptModule: Object;

  get jsObjAsArray() {
    return Object.keys(this._javascriptModule).map((key) => this._javascriptModule[key]);
  }
  get jsObjAsKeys() {
    return Object.keys(this._javascriptModule);
  }

  constructor(private db: DatabaseService) {
    this._javascriptModule = db.arrOfModules[0]
  }

  toggle(obj) {
    obj.completed = !obj.completed;
  }

  ngOnInit() {}

}
