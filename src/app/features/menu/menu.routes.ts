import { Routes } from '@angular/router';
import { Menu } from './menu';
import { ProductCard } from './components/product-card/product-card';

export const MENU_ROUTES: Routes = [
  { path: '', component: Menu },
  {
    path: 'card', component: ProductCard
  },
  {
    // route for a product detail by id. Use singular 'detail' to match links like ['/menu/detail', id]
    path: 'detail/:id', loadComponent: ()=> import('./components/product-detail/product-detail').then(m=>m.ProductDetail)
  }
];
