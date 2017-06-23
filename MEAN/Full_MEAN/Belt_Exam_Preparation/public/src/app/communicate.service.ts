import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Topic } from './topic';

@Injectable()
export class CommunicateService {

  constructor() { }

  observedTopics = new BehaviorSubject(null);

  updateTopics(topics: Array<Topic>) {
  	this.observedTopics.next(topics)
  }

}
