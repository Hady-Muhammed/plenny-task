import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/actions/cart.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  constructor(private router: Router, private store: Store) {}

  ngOnInit() {}

  get discountedPrice(): string {
    return String(
      (
        this.product.price -
        (this.product.price * this.product.discountPercentage) / 100
      ).toFixed(2)
    );
  }

  addToCart() {
    this.store.dispatch(addToCart({ product: this.product }));
  }
}
