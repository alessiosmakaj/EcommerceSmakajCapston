import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const opacity = scrollY > 100 ? Math.min(1, (scrollY - 100) / 100) : 0; // Gradualmente cambia l'opacità

    this.renderer.setStyle(this.el.nativeElement, 'background-color', `rgba(255, 255, 255, ${opacity})`);
  }
}
