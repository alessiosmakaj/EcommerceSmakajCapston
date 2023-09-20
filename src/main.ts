import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Aggiungi gli import per Slick Carousel
import 'slick-carousel/slick/slick.min.js'; // JavaScript di Slick Carousel
import 'slick-carousel/slick/slick.css'; // File CSS di Slick Carousel
import 'slick-carousel/slick/slick-theme.css'; // File CSS del tema di Slick Carousel

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
