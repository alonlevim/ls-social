import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Post } from './../post/post.component';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-add-update-post',
  templateUrl: './add-update-post.component.html',
  styleUrls: ['./add-update-post.component.scss']
})
export class AddUpdatePostComponent implements OnInit {
  @Input() type: string;
  @Input() show: boolean;
  @Input() post: Post;
  @Output() exit = new EventEmitter();
  tempTitle: string;
  loading = false;
  errorSend = false;

  constructor(private feed: FeedService) {
    this.successSubmitPost = this.successSubmitPost.bind(this);
    this.errorSubmitPost = this.errorSubmitPost.bind(this);
  }

  ngOnInit() {
  }

  initPost() {
    this.post = new Post();
  }

  onSubmit(post: Post) {
    this.feed.addPost(post, this.errorSubmitPost, this.successSubmitPost);
  }

  successSubmitPost() {
    this.loading = false;
    this.errorSend = false;
    this.show = false;
  }

  errorSubmitPost() {
    this.loading = false;
    this.errorSend = true;
  }

}
