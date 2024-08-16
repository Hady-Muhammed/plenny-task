import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any;
  categories: any;
  selectedCategId: any;
  isLoggedIn!: boolean;
  currentPage: number = 1;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productsService.getProducts(this.currentPage).then((res: any) => {
      this.products = res.products;
    });
  }

  getCategories() {
    this.productsService.getCategories().then((res: any) => {
      this.categories = res;
    });
  }

  searchProducts(searchTerm: string) {
    this.productsService.searchProducts(searchTerm).then((res: any) => {
      this.products = res.products;
    });
  }

  onCategoryChange(categ: string) {
    this.currentPage = 1;
    this.productsService
      .getProducts(this.currentPage, categ)
      .then((res: any) => {
        this.products = res.products;
      });
  }
}
