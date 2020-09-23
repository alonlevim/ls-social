import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-post',
  templateUrl: './add-update-post.component.html',
  styleUrls: ['./add-update-post.component.scss']
})
export class AddUpdatePostComponent implements OnInit {
  type = 'edit';

  constructor() { }

  ngOnInit() {
  }

}
