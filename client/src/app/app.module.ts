import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { AddUpdatePostComponent } from './add-update-post/add-update-post.component';
import { LoadingComponent } from './loading/loading.component';
import { AuthenticationService } from '../authentication/authentication.service';

@NgModule({
  declarations: [				
    AppComponent,
      FeedComponent,
      PostComponent,
      AddUpdatePostComponent,
      LoadingComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      { path: '', component: FeedComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router: Router, private authentication: AuthenticationService) {
    router.events.subscribe((val) => {});
  }
}
