import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  addToCart(item: any) {
    this.cart.push(item);
  }

  removeFromCart(item: any) {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    // Implementa il calcolo del totale qui, ad esempio sommando i prezzi di tutti gli articoli nel carrello
    let total = 0;
    for (const item of this.cart) {
      total += item.price;
    }
    return total;
  }
}
