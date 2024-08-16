import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LoginComponent } from '../pages/login/login.component';
import { FormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { SignupComponent } from '../pages/signup/signup.component';
import { HomeComponent } from '../pages/home/home.component';
import { LogoComponent } from '../components/logo/logo.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../store/reducers/cart.reducer';
import { PaginationButtonComponent } from '../components/pagination-button/pagination-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    LogoComponent,
    FooterComponent,
    ProductCardComponent,
    PaginationButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ cart: cartReducer }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
