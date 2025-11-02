import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <div class="navbar__brand">
        <a routerLink="/" class="navbar__logo">Fresas<span class="navbar__logo-accent">.</span></a>
      </div>

      <div class="navbar__links">
        <a routerLink="/">Inicio</a>
        <a routerLink="/menu">Menú</a>
        <a routerLink="/cart">Carrito</a>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
