import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAPIData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
