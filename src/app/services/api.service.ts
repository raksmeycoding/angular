import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  #BASE_URL = 'https://api.escuelajs.co/api/v1/';

  getProducts() {
    return this.http.get<Product[]>(this.#BASE_URL + 'products');
  }

  getProductById(id: number) {
    this.http.get<Product>(this.#BASE_URL + `products/${id}`);
  }
}
