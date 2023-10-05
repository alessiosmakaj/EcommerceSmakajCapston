import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-vestito',
  templateUrl: './vestito.component.html',
  styleUrls: ['./vestito.component.scss']
})
export class VestitoComponent {
  constructor(private cartService: CartService) {}

  addToCart(): void {
    const product = {
      id: '768921TMV159000',
      name: 'INFLATABLE HOODIE UNITY SPORTS ICON MEDIUM FIT CON ZIP IN BIANCO',
      description: 'Descrizione del prodotto 2',
      price: 2500
    };
    this.cartService.addToCart(product);
  }
}
