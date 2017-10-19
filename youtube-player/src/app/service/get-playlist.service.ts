import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class GetPlaylistService {

  searchtopic: string;
  private url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';
  constructor(private http: Http) {

  }
  //GETS THE TOPIC FOR JSON
  getTopic() {

    return this.http.get(this.url).map((data) =>
      data.json()
    );
  }
  //UPDATES THE TOPIC WHEN THE INPUT IS ENTERED
  updateTopic(topic: string) {
    this.searchtopic = topic;

  }

}
