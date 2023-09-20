import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importa Routes da @angular/router

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';

const Rotte: Routes = [
  { path: '', component: HomeComponent }, // Rotta predefinita (pagina iniziale)
  { path: 'product/:id', component: ProductsingleComponent }, // Esempio di rotta con parametro dinamico
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    DashboardComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Rotte),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }