import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../authentication/user';
import { TokenService } from '../authentication/token.service';
import { NewToken } from './../authentication/newToken';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = environment.production ? '/' : "http://localhost:8081/";

  constructor(private http: HttpClient, private token: TokenService) {
    this.handleError = this.handleError.bind(this);
  }

  // Feed
  getFeed(ids?: string[]) {
    const feedApi = 'api/feed';
    const options = this.getOptions();

    return this.http.post(this.configUrl + feedApi, { ids }, options).pipe(catchError(this.handleError));
  }

  postAddPost(post: FormData) {
    const addPostApi = 'api/add-post';
    const withoutContentType = true;
    const options = this.getOptions(withoutContentType);

    return this.http.post(this.configUrl + addPostApi, post, options).pipe(catchError((error: HttpErrorResponse) => {
      this.checkIllegalResponse(error);
      return throwError(error.error.message || 'Something bad happened; please try again later.');
    }));
  }

  putUpdatePost(post: FormData) {
    const updatePostApi = 'api/update-post';
    const withoutContentType = true;
    const options = this.getOptions(withoutContentType);

    return this.http.put(this.configUrl + updatePostApi, post, options).pipe(catchError((error: HttpErrorResponse) => {
      this.checkIllegalResponse(error);
      return throwError(error.error.message || 'Something bad happened; please try again later.');
    }));
  }

  deletePost(id: string) {
    const deletePostApi = `api/delete-post/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', authorization: this.token.getToken() }),
    };

    return this.http.delete(this.configUrl + deletePostApi, httpOptions).pipe(catchError((error: HttpErrorResponse) => {
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

  putToggleLikePost(data: object) {
    const toggleLikePost = 'api/toggle-like-post';
    const options = this.getOptions();

    return this.http.put(this.configUrl + toggleLikePost, data, options).pipe(catchError((error: HttpErrorResponse) => {
      this.checkIllegalResponse(error);
      return throwError(error.error.message || 'Something bad happened; please try again later.');
    }));
  }

  private getOptions(withoutContentType = false) {
    const params = new HttpParams();
    return {
      params,
      reportProgress: true,
      headers: withoutContentType ? new HttpHeaders({
        authorization: this.token.getToken()
      }) : new HttpHeaders({
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
