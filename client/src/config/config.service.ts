import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = "http://localhost:8081/";
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZlMWIzMzQwZmZiYTMwMmNhOGEzZDQiLCJpYXQiOjE2MDEwNTE0NDMsImV4cCI6MTYwMTY1NjI0M30.RbTI0Dyd-vgt2p1RE-eY2og7qWE6opi-hnOorXgU0Ao'
    })
  };

  constructor(private http: HttpClient) { }

  getFeed() {
    const feedApi = 'api/feed';
    return this.http.get(this.configUrl + feedApi, this.options);
  }
}
