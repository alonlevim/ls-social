import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { timeSince } from '../../helper/dateHelper';

export class Post {
  public _id: string;
  public author: string;
  public title: string;
  public description: string;
  public image: any;
  public keyImage: string;
  public createdAt: Date;
  public updatedAt: Date;
  public admin: boolean;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() edit = new EventEmitter();
  createdAt: string;
  updatedAt: string = '';

  constructor() { }

  ngOnInit() {
    this.convertDateToString();
  }

  ngOnChanges() {
    this.convertDateToString();
  }

  convertDateToString() {
    this.createdAt = timeSince(new Date(this.post.createdAt));
    
    if (this.post.updatedAt)
      this.updatedAt = timeSince(new Date(this.post.updatedAt));
  }

}
