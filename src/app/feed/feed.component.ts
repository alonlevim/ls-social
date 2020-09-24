import { Component, OnInit } from '@angular/core';

import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts = [];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.posts = this.feedService.getPosts();
  }

}
