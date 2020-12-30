import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = environment.production ? '/' : "http://localhost:8081/";

  constructor(private http: HttpClient) {
    this.handleError = this.handleError.bind(this);
  }

  // Feed
  getFeed(ids?: string[]) {
    const feedApi = 'api/feed';

    return this.http.post(this.configUrl + feedApi, { ids }).pipe(catchError(this.handleError));
  }

  postAddPost(post: FormData) {
    const addPostApi = 'api/add-post';

    return this.http.post(this.configUrl + addPostApi, post).pipe(catchError((error: HttpErrorResponse) => {
      this.checkIllegalResponse(error);
      return throwError(error.error.message || 'Something bad happened; please try again later.');
    }));
  }

  putUpdatePost(post: FormData) {
    const updatePostApi = 'api/update-post';

    return this.http.put(this.configUrl + updatePostApi, post).pipe(catchError((error: HttpErrorResponse) => {
      this.checkIllegalResponse(error);
      return throwError(error.error.message || 'Something bad happened; please try again later.');
    }));
  }

  deletePost(id: string) {
    const deletePostApi = `api/delete-post/${id}`;

    return this.http.delete(this.configUrl + deletePostApi).pipe(catchError((error: HttpErrorResponse) => {
      this.checkIllegalResponse(error);
      return throwError(error.error.message || 'Something bad happened; please try again later.');
    }));
  }

  // Login / Registration
  postLogout() {
    const logoutApi = 'logout';

    return this.http.post(this.configUrl + logoutApi, {});
  }

  putToggleLikePost(data: object) {
    const toggleLikePost = 'api/toggle-like-post';

    return this.http.put(this.configUrl + toggleLikePost, data).pipe(catchError((error: HttpErrorResponse) => {
      this.checkIllegalResponse(error);
      return throwError(error.error.message || 'Something bad happened; please try again later.');
    }));
  }

  private checkIllegalResponse({ error }: HttpErrorResponse) {
    const failed = "failed";

    if (environment.production && typeof error.status !== "undefined" && error.status === failed) {
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
