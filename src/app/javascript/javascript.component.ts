import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  sources: Object;

  constructor(private db: DatabaseService) {
    this.sources = db.sources[0]
  }

  toggle(obj) {
    obj.completed = !obj.completed;
  }

  ngOnInit() {
  }

}
