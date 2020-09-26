import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../authentication/user';
import { TokenService } from '../authentication/token.service';
import { NewToken } from './../authentication/newToken';
import { Post } from 'src/app/post/post.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = "http://localhost:8081/";

  constructor(private http: HttpClient, private token: TokenService) {
    this.handleError = this.handleError.bind(this);
  }

  // Feed
  getFeed() {
    const feedApi = 'api/feed';
    const options = this.getOptions();

    return this.http.get(this.configUrl + feedApi, options).pipe(catchError(this.handleError));
  }

  postAddPost(post: Post, failedCallback?: Function) {
    const addPostApi = 'api/add-post';
    const options = this.getOptions();

    return this.http.post(this.configUrl + addPostApi, post, options).pipe(catchError((error: HttpErrorResponse) => {
      this.checkIllegalResponse(error);
      return throwError(error.error.message || 'Something bad happened; please try again later.');
    }));
  }

  // Login / Registration
  postLogin(user: User) {
    const loginApi = 'login';

    return this.http.post<NewToken>(this.configUrl + loginApi, { ...user });
  }

  postRegistration(user: User) {
    const addUserApi = 'add-user';

    return this.http.post<NewToken>(this.configUrl + addUserApi, { ...user });
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.token.getToken()
      })
    };
  }

  private checkIllegalResponse({ error }: HttpErrorResponse) {
    const failed = "failed";

    if (typeof error.status !== "undefined" && error.status === failed) {
      // Remove token from local-storage
      this.token.removeToken();
      window.location.reload();
      return false;
    }

    return true;
  }

  private handleError(error: HttpErrorResponse) {
    this.checkIllegalResponse(error);

    return throwError(
      'Something bad happened; please try again later.');
  }
}
