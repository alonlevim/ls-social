import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';

@NgModule({
  declarations: [		
    AppComponent,
      LoginRegistrationComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LoginRegistrationComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
