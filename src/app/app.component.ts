import { Component, Renderer2, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  cssUrl: string = "";

  constructor(
    public sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeService.currentTheme$.subscribe(theme => {
      this.cssUrl = `../assets/estilos/${theme}`;
      this.updateStyles();
    });
  }

  updateStyles() {
    const head = document.getElementsByTagName('head')[0];

    // Remove existing link
    const existingLink = document.querySelector('link[rel="stylesheet"]');
    if (existingLink) {
      this.renderer.removeChild(head, existingLink);
    }

    // Add new link
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'type', 'text/css');
    this.renderer.setAttribute(link, 'href', this.cssUrl);
    this.renderer.appendChild(head, link);
  }

  changeTheme() {
    this.themeService.toggleTheme();
  }
}
