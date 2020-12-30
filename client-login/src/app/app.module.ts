import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';

import { AuthenticationService } from '../authentication/authentication.service';

@NgModule({
  declarations: [				
    AppComponent,
      LoginRegistrationComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      { path: '', component: LoginRegistrationComponent },
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
