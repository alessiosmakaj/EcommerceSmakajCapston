import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Assicurati di importare il tuo servizio carrello

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0; // Dichiarazione della variabile cartTotal

  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  ngOnInit(): void {
    // Calcola il totale del carrello utilizzando il tuo servizio del carrello e assegna il valore a cartTotal
    this.cartTotal = this.cartService.getTotal();
  }
}
