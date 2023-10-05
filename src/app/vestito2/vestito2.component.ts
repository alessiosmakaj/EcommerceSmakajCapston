import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-vestito2',
  templateUrl: './vestito2.component.html',
  styleUrls: ['./vestito2.component.scss']
})
export class Vestito2Component {
  constructor(private cartService: CartService) {}

  addToCart(): void {
    const product = {
      id: '768730TPT031000o3',
      name: 'GONNA DECONSTRUCTED GODET DA DONNA IN NERO',
      price: 2500
    };
    this.cartService.addToCart(product);
  }
}
