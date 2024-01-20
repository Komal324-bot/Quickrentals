import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Product } from './Product';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';
import { LoginCredentials } from './loginCredential';


@Injectable({
  providedIn: 'root'
})


export class ProductService implements OnInit {


  searchOption=[]
       public postsData!: Product[] 
      
      
      

  baseURL = "http://localhost:8083/admin"; 
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
  
  }

  getProductSearch(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`http://localhost:8083/products`);
}




  addProduct(product?: Product): Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseURL}/products`, product);
  }
  loginUser(loginCredential?:LoginCredentials)
  {
   return this.httpClient.post<Object>(`http://localhost:8084/api/v1/login`,loginCredential);

  }

  addUser(user?:User):Observable<Object>{

    return this.httpClient.post<Object>(`http://localhost:8085/user/add`,user);
  
    }

  
  getProduct():Observable<Array<Product>> {

    
     return this.httpClient.get<Array<Product>>(`http://localhost:8083/products`);
  
  }


  
  getProducts(someParam: string): Observable<Array<Product>> {
    let params = new HttpParams().set('category', someParam); // Add your parameter name and value here

    return this.httpClient.get<Array<Product>>('http://localhost:8083/products', { params });
  }
  getProductsRecommendtion(someParam: string): Observable<Array<Product>> {
    let params = new HttpParams().set('address', someParam); // Add your parameter name and value here

    return this.httpClient.get<Array<Product>>('http://localhost:8083/products', { params });
  }

getOneProductById(productId: string): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:8083/products/'+productId);
    
  }

}