import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:3000/products";

  constructor(private _httpClient: HttpClient) { }

  getProduct(id: any): Observable<Product> {
    const updateUrl = `${this.url}?id=${id}`;
    return this._httpClient.get<Product>(updateUrl);
  }

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.url);
  }

  registerProduct(product: Product): Observable<Product[]> {
    return this._httpClient.post<Product[]>(this.url, product)
  }

  updateProduct(id: any, product: Product): Observable<Product[]> {
    const updateUrl = `${this.url}/${id}`;
    return this._httpClient.put<Product[]>(updateUrl, product);
  }

  removeProduct(id: any): Observable<Product[]> {
    const deleteUrl = `${this.url}/${id}`;
    return this._httpClient.delete<Product[]>(deleteUrl);
  }
}