import { DatabaseService } from './database.service';
import { JavascriptComponent } from './javascript/javascript.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  currentTopic = null;
  sources = [];

  constructor(private db: DatabaseService) { }

  changeTopic(topic) {
    this.currentTopic = topic.topicName;
  }
  
  resetTopic() {
    this.currentTopic = null;
  }

  ngOnInit() {
    this.db
      .arrOfModules()
      .subscribe( res => this.sources = res );
  }
}
