import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Post } from './../post/post.component';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-add-update-post',
  templateUrl: './add-update-post.component.html',
  styleUrls: ['./add-update-post.component.scss']
})
export class AddUpdatePostComponent implements OnInit {
  protected tempTitle: string;
  protected loading = false;
  protected errorSend = false;
  protected errorMessage: string;
  protected postForm: FormGroup;
  protected submitted = false;
  protected minLengthTitle = 2;
  protected maxLengthTitle = 50;
  protected deleteImageFlag = false;

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  @Input() type: string;
  @Input() post: Post;
  @Output() exit = new EventEmitter();


  constructor(private feed: FeedService, private formBuilder: FormBuilder) {
    this.successSubmitPost = this.successSubmitPost.bind(this);
    this.errorSubmitPost = this.errorSubmitPost.bind(this);
  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: [this.type === "edit" ? this.post.title : '',
      [Validators.required, Validators.minLength(this.minLengthTitle), Validators.maxLength(this.maxLengthTitle)]],
      description: [this.type === "edit" ? (this.post.description || '') : ''],
      image: ['']
    });
  }

  initPost() {
    this.post = new Post();
    this.deleteImageFlag = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.postForm.controls; }

  onFileSelect(event) {
    const file = event.target.files[0];
    this.postForm.get('image').setValue(file);
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }

    this.loading = true;

    // Organize form
    const formData = new FormData();
    formData.append('image', this.postForm.get('image').value);
    formData.append('title', this.postForm.get('title').value);
    if (this.postForm.get('description').value.trim() !== "") {
      formData.append('description', this.postForm.get('description').value);
    }

    // Send form
    if (this.type === "add")
      this.feed.addPost(formData, this.errorSubmitPost, this.successSubmitPost);
    else {
      formData.append('_id', this.post._id);
      formData.append('deletePhoto', this.deleteImageFlag ? 'true' : 'false');

      if (this.deleteImageFlag) {
        formData.append('keyImage', this.post.keyImage);
      }

      this.feed.updatePost(formData, this.errorSubmitPost, this.successSubmitPost);
    }

  }

  successSubmitPost() {
    this.loading = false;
    this.errorSend = false;
    this.errorMessage = '';
    this.exit.emit();
  }

  errorSubmitPost(error: string) {
    this.loading = false;
    this.errorSend = true;
    this.errorMessage = error;
  }

  deleteImage() {
    this.deleteImageFlag = true;
  }

}
