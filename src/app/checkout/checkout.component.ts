import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;
  isPaymentComplete: boolean = false; // Variabile per tenere traccia dello stato di pagamento

  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.cartTotal = this.cartService.getTotal();
  }

  simulatePayment() {
    // Qui puoi inserire la tua logica di pagamento simulato
    // Ad esempio, dopo un piccolo ritardo (simulando il processo di pagamento), imposta isPaymentComplete su true.
    setTimeout(() => {
      this.isPaymentComplete = true;
    }, 2000); // Simula il pagamento completato dopo 2 secondi (puoi regolare il valore a tuo piacimento)
  }
}
