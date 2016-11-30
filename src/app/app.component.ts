import { Component } from '@angular/core';
import {MainService} from './main.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  title: string = this.service.param;

  constructor(private service: MainService) {
    this.items = this.service.getData();
    console.log(this.service.getData());
  }
}
