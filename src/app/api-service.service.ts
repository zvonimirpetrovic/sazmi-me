import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  newTitle : String;
  newContent : String;
  newPost: any;

  postAPIData( newTitle, newContent ){
    this.http.post('http://localhost:3001/api/',{
        title: this.newTitle,
        content: this.newContent}).subscribe(response => {
     console.log(response);
      return this.newPost = response
      });
  }
}
