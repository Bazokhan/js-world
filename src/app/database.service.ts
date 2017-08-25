import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DatabaseService {

  constructor(private http: Http) { }

  arrOfModules(): Observable<any[]>{
    let modules = this.http.get('//api.myjson.com/bins/zp7bx')
      .map((response:Response) => response.json())
      .catch((error: any) => {
        let errorMsg = error.message || 'Error: something went wrong!';
        return Observable.throw(errorMsg);
      });
      return modules;
  }
}
