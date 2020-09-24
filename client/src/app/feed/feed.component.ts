import { Component, OnInit } from '@angular/core';

import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts = [];
  showPopup = false;
  typePopup :string;
  postToEdit;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getPosts().subscribe((data: any[])=>{
      this.posts = data;
    });
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

}
