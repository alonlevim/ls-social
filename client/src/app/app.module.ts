import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { AddUpdatePostComponent } from './add-update-post/add-update-post.component';

@NgModule({
  declarations: [			
    AppComponent,
      LoginRegistrationComponent,
      FeedComponent,
      PostComponent,
      AddUpdatePostComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginRegistrationComponent },
      { path: '', component: FeedComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
