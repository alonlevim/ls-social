import { Post } from './../post/post.component';
import { Component, OnInit } from '@angular/core';

import { FeedService } from '../feed.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  showPopup = false;
  typePopup: string;
  postToEdit;
  loading = false;
  error = false;

  constructor(public feed: FeedService, private auth: AuthenticationService) {
    this.successGetFeed = this.successGetFeed.bind(this);
    this.errorGetFeed = this.errorGetFeed.bind(this);
  }

  ngOnInit() {
    this.loading = true;
    this.feed.getPosts(this.errorGetFeed, this.successGetFeed);
  }

  successGetFeed() {
    this.error = false;
    this.loading = false;
  }

  errorGetFeed() {
    this.error = true;
    this.loading = false;
  }

  showAddPostPopup() {
    this.showPopup = true;
    this.typePopup = 'add';
  }

  showEditPostPopup(post) {
    this.showPopup = true;
    this.typePopup = 'edit';
    this.postToEdit = post;
  }

  closePopup() {
    this.showPopup = false;
    this.postToEdit = {};
  }

  logout() {
    this.auth.logout();
  }

}
