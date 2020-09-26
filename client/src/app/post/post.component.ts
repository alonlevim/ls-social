import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

export class Post {
  public author: string;
  public title: string;
  public description: string;
  public image: any;
  public createdAt: Date;
  public updatedAt: Date;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
