import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url="http://new.fuelifeexplorers.com/wp-json/wp/v2/tags";
    constructor(private http:HttpClient) { }
    getPosts()
    {
      return this.http.get(this.url);
    }
 
}
