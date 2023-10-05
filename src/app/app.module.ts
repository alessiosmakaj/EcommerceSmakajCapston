import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { CartService } from './cart.service'; // Importa Scroll da @angular/router

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VestitoComponent } from './vestito/vestito.component';
import { Vestito2Component } from './vestito2/vestito2.component';


const Routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'profile-details', component: ProfileDetailsComponent},
  { path: 'invernouomo', component: InvernouomoComponent},
  { path: 'invernodonna', component: InvernodonnaComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'productsingle', component: ProductsingleComponent},
  { path: 'vestito', component: VestitoComponent},
  { path: 'vestito2', component: Vestito2Component}
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
    AboutusComponent,
    VestitoComponent,
    Vestito2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes, { scrollPositionRestoration: 'enabled' }), 
  ],
  providers: [
    { provide: Scroll, useValue: (router: any) => { return [0, 0]; } }, 
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
