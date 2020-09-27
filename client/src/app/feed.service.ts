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

  deletePost(id: string, errCallback: Function, successCallback: Function) {
    this.service.deletePost(id).subscribe((data: Post[]) => {
      this.posts = data;
      successCallback();
    }, (err) => {
      errCallback(err);
    });
  }

  getMorePosts(errCallback: Function, successCallback: Function) {
    const ids = this.posts.map(({ _id }) => _id);

    this.service.getFeed(ids).subscribe((data: Post[]) => {
      data.forEach(item => {
        this.posts.push(item);
      });
      successCallback();
    }, (err) => {
      errCallback();
    });
  }

  toggleLikePost(like: boolean, post: Post) {
    this.service.putToggleLikePost({like, _id: post._id}).subscribe((data: any) => {
      if( data.status === "ok" ) {
        post.didILike = like;
        post.likes = data.likes;
      } 
    });
  }
}
