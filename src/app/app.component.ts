import { DatabaseService } from './database.service';
import { JavascriptComponent } from './javascript/javascript.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  currentTopic = null;
  sources = [];

  constructor(private db: DatabaseService) {
    this.sources = db.arrOfModules
  }

  changeTopic(topic) {
    this.currentTopic = topic.topicName;
  }
  
  resetTopic() {
    this.currentTopic = null;
  }
}
