import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Importa il servizio del carrello

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.scss']
})
export class ProductsingleComponent {
  constructor(private cartService: CartService) {}

  addToCart(): void {
    // Puoi anche aggiungere manualmente un oggetto prodotto al carrello qui
    const product = {
      id: 'prodotto-id-mock',
      name: 'Nome del Prodotto',
      description: 'Descrizione del prodotto',
      price: 19.99,
      images: ['url-immagine1', 'url-immagine2', 'url-immagine3']
    };
    this.cartService.addToCart(product); // Aggiungi il prodotto al carrello
  }
}
