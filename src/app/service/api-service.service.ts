import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, mergeMap, tap, publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private http: HttpClient ) { }

  private apiData = new BehaviorSubject<string>(null);
  public apiData$ = this.apiData.asObservable();


	/**
	* POST
	*
	* /api/pages
	*
	*
	* @param params
	*/
 	post(body, params:string = ''): any {
		return this.http.post(environment.API_URL + params, body)
		.pipe(
			map((res: any) => res)
    )
  }
  
  setData(res) {
    this.apiData.next(res)
  }
}

