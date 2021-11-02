import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestwsService {

  constructor(private http: HttpClient) { }

  public callapi():any{
    return this.http.get("http://localhost:8081/product/getAll").pipe(
      catchError(err => of([]))
    );
    
  }
}
