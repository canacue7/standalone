import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="w-full bg-white/60 backdrop-blur-md border-b border-gray-100">
      <div class="app-container flex items-center justify-between h-16">
        <a routerLink="/" class="text-lg font-semibold text-slate-900">Fresas<span class="text-rose-soft">.</span></a>

        <div class="flex items-center gap-4">
          <a routerLink="/" class="text-sm text-gray-600 hover:text-slate-900">Inicio</a>
          <a routerLink="/menu" class="text-sm text-gray-600 hover:text-slate-900">Menú</a>
          <a routerLink="/cart" class="text-sm text-gray-600 hover:text-slate-900">Carrito</a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
