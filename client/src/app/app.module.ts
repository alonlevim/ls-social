import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { AddUpdatePostComponent } from './add-update-post/add-update-post.component';
import { LoadingComponent } from './loading/loading.component';
import { AuthenticationService } from '../authentication/authentication.service';

@NgModule({
  declarations: [				
    AppComponent,
      LoginRegistrationComponent,
      FeedComponent,
      PostComponent,
      AddUpdatePostComponent,
      LoadingComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginRegistrationComponent },
      { path: '', component: FeedComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router: Router, private authentication: AuthenticationService) {
    router.events.subscribe((val) => {
      if( val instanceof NavigationEnd ){
        this.authentication.checkAuth(val.url);
      }
  });
  }
}
