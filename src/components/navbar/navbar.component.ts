import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCartProductsCount } from '../../store/selectors/cart.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() isLoggedIn!: boolean;
  @Output() onSearching = new EventEmitter<string>();
  searchTerm: any;
  cartProductsCount$: any;
  constructor(private store: Store) {}

  ngOnInit() {
    this.cartProductsCount$ = this.store.pipe(select(selectCartProductsCount));
  }

  searchProducts() {
    if (this.searchTerm) {
      this.onSearching.emit(this.searchTerm);
    }
  }
}
