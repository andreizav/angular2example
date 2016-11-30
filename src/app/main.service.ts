import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  constructor(private http: Http) { }

  param:string = "asdf";

  public getData(): Observable<any[]> {
    return this.http.get('https://api.worldoftanks.ru/wot/account/list/?application_id=demo&search=andrei')
    .map(response => response.json().data);
  }

}
