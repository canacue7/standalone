import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/">Inicio</a>
      <a routerLink="/menu">Menú</a>
      <a routerLink="/cart">Carrito</a>
    </nav>
  `
})
export class NavbarComponent {}
