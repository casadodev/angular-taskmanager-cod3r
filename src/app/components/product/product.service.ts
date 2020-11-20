import { Product } from './product-create/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url_base = 'http://localhost:3001/products'

  constructor(private http: HttpClient ) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url_base, product)
  }
}
