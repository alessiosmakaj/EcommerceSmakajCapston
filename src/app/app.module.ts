import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Scroll } from '@angular/router'; // Importa Scroll da @angular/router

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { HttpClientModule } from '@angular/common/http';
import { InvernouomoComponent } from './invernouomo/invernouomo.component';
import { InvernodonnaComponent } from './invernodonna/invernodonna.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const Routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'product/:id', component: ProductsingleComponent }, 
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'profile-details', component: ProfileDetailsComponent},
  { path: 'invernouomo', component: InvernouomoComponent},
  { path: 'invernodonna', component: InvernodonnaComponent },
  { path: 'aboutus', component: AboutusComponent}
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
    OrdersComponent,
    AddressComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    InvernouomoComponent,
    LoginComponent,
    RegisterComponent,
    InvernodonnaComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes, { scrollPositionRestoration: 'enabled' }), // Configura il servizio Scroll
  ],
  providers: [
    { provide: Scroll, useValue: (router: any) => { return [0, 0]; } }, // Configura il servizio Scroll per tornare all'inizio della pagina
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
