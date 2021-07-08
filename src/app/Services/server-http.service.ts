import { HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators';
import { Student } from '../models/Student';
@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {
  getStudents() {
    throw new Error('Method not implemented.');
  }
private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     // Authorization: 'my-auth-token'
    })
  };
private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }
  public getProfile(): Observable<any>{
    const url =`${this.REST_API_SERVER}/profile`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getStudent(): Observable<any>{
    const url =`${this.REST_API_SERVER}/student`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public addStudent(data: Student): Observable<any>{
    const url =`${this.REST_API_SERVER}/student`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getComments(): Observable<any>{
    const url =`${this.REST_API_SERVER}/comments`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public getPosts(): Observable<any>{
    const url =`${this.REST_API_SERVER}/posts`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  public addPosts(data): Observable<any>{
    const url =`${this.REST_API_SERVER}/posts`;
    return this.httpClient
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );   
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
