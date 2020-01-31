import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { IStudent } from 'app/models/IStudent';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpoint = 'http://localhost:62520/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  };
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.endpoint + 'students');
  }

  getStudent(id): Observable<any> {
    return this.http.get(this.endpoint + 'students/' + id).pipe(
      map(this.extractData));
  }

  addStudent(student): Observable<IStudent> {
    return this.http.post<IStudent>(this.endpoint + 'students', JSON.stringify(student), this.httpOptions);
  }

  updateStudent(id, student): Observable<any> {
    return this.http.put(this.endpoint + 'students/' + id, JSON.stringify(student), this.httpOptions).pipe(
      tap(_ => console.log(`updated student id=${id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteStudent(id): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'students/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted student id=${id}`)),
      catchError(this.handleError<any>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
