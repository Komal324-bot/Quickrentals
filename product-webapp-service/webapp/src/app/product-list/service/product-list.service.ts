import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get<any>("http://localhost:8083/products");
  }
}
