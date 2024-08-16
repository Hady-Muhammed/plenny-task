import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private rest: RestService) {}

  getProducts(page: number, category?: string) {
    let url = category
      ? `products/category/${category}`
      : page
      ? `products?limit=10&skip=${(page - 1) * 10}`
      : 'products?limit=10';
    return this.rest.get(url);
  }

  getCategories() {
    return this.rest.get('products/categories');
  }

  searchProducts(searchTerm?: string) {
    return this.rest.get(`products/search?q=${searchTerm}`);
  }
}
