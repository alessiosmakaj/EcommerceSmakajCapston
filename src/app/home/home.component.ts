import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel'; // Importa il modulo SlickCarouselModule

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // La configurazione del carosello va dichiarata qui se non l'hai ancora fatto
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true
    // altre opzioni di configurazione...
  };

  constructor() { }

  ngOnInit(): void {
  }

}
