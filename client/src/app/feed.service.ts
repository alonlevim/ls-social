import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private REST_API_SERVER = "http://localhost:8081/api";
  
  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(`${this.REST_API_SERVER}/feed`);
  }

}
