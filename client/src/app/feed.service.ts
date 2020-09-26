import { Injectable } from '@angular/core';

import { ConfigService } from './../config/config.service';
import { Post } from './post/post.component';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  posts: Post[] = [];

  constructor(private service: ConfigService) { }

  getPosts(errCallback: Function, successCallback: Function) {
    this.service.getFeed().subscribe((data: Post[]) => {
      this.posts = data;
      successCallback();
    }, (err) => {
      errCallback();
    });
  }

  addPost(post: FormData, errCallback: Function, successCallback: Function) {
    this.service.postAddPost(post).subscribe((data: Post[]) => {
      this.posts = data;
      successCallback();
    }, (err) => {
      errCallback(err);
    });
  }

  updatePost(post: FormData, errCallback: Function, successCallback: Function) {
    this.service.putUpdatePost(post).subscribe((data: Post[]) => {
      this.posts = data;
      successCallback();
    }, (err) => {
      errCallback(err);
    });
  }

}
