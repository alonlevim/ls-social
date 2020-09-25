import { Injectable } from '@angular/core';

import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private service: ConfigService) { }

  getPosts() {
    return this.service.getFeed();
  }

}
