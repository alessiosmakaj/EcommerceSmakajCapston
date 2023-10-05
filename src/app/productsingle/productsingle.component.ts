import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.scss']
})
export class ProductsingleComponent {
  constructor(private cartService: CartService) {}

  addToCart(): void {
    const product = {
      id: '768814TPT151000',
      name: 'PANTALONI DOUBLE FRONT IN NERO',
      price: 1850
    };
    this.cartService.addToCart(product);
  }
}
