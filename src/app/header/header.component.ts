import { Component, OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHeaderOpaque = false;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 100) { // Cambia il valore a tuo piacimento
      if (!this.isHeaderOpaque) {
        this.renderer.addClass(this.el.nativeElement, 'opaque');
        this.isHeaderOpaque = true;
      }
    } else {
      if (this.isHeaderOpaque) {
        this.renderer.removeClass(this.el.nativeElement, 'opaque');
        this.isHeaderOpaque = false;
      }
    }
  }
}
