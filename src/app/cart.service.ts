import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    // Recupera i dati del carrello dal localStorage quando il servizio viene inizializzato
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }

  private saveCartToLocalStorage() {
    // Salva il carrello nel localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(item: any) {
    // Verifica se il prodotto è già nel carrello
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // Se il prodotto è già nel carrello, aumenta la quantità
      existingItem.quantity++;
    } else {
      // Se il prodotto non è nel carrello, aggiungilo con quantità 1
      item.quantity = 1;
      this.cart.push(item);
    }

    // Salva il carrello nel localStorage
    this.saveCartToLocalStorage();
  }

  removeFromCart(item: any) {
    const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      // Rimuovi un'unità del prodotto dal carrello
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        // Se la quantità è 1, rimuovi completamente il prodotto dal carrello
        this.cart.splice(index, 1);
      }

      // Salva il carrello nel localStorage
      this.saveCartToLocalStorage();
    }
  }

  removeProductById(productId: string) {
    const index = this.cart.findIndex(cartItem => cartItem.id === productId);
    if (index !== -1) {
      // Rimuovi completamente il prodotto dal carrello
      this.cart.splice(index, 1);

      // Salva il carrello nel localStorage
      this.saveCartToLocalStorage();
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    // Implementa il calcolo del totale tenendo conto della quantità dei prodotti nel carrello
    let total = 0;
    for (const item of this.cart) {
      total += item.price * item.quantity;
    }
    return total;
  }
}
