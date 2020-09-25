import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http: HttpClient, private service: ConfigService) { }

  getPosts() {
    return this.service.getFeed();
  }

}
