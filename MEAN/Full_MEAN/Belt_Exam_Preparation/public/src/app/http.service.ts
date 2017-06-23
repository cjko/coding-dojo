import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  postTopic(topic) {
  	return this._http.post('/topics', topic).map(response=>response.json()).toPromise()
  }

  getTopics() {
  	return this._http.get('/topics').map(response=>response.json()).toPromise()
  }

  postUser(user) {
  	return this._http.post('/users', user).map(response=>response.json()).toPromise()
  }

  validateUser(user) {
  	return this._http.post('/validate', user).map(response=>response.json()).toPromise()
  }

  getTopic(id) {
  	console.log(`ID: ${ id }`)
  	return this._http.get(`/topics/${id}`).map(response=>response.json()).toPromise()
  }

  postPost(topic_id, post) {
  	return this._http.post(`/postTo/${topic_id}`, post).map(response=>response.json()).toPromise()
  }

  postComment(post_id, comment) {
  	console.log(post_id)
  	console.log(comment)
  	return this._http.post(`/commentOn/${post_id}`, comment).map(response=>response.json()).toPromise()
  }

}
