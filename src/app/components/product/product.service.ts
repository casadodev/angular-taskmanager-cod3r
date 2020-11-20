import { Product } from './product-create/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url_base = 'http://localhost:3001/products'
  headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient ) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url_base, product, {headers: this.headers})
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url_base, {headers: this.headers})
  }

}
