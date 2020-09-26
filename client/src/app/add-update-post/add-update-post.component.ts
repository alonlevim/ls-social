import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Post } from './../post/post.component';

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

  constructor() { }

  ngOnInit() {
  }

  initPost() {
    this.post = new Post();
  }

}
