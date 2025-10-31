import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
    {path:'', component: Home},
    {
        path:'menu', loadChildren: ()=> import('./features/menu/menu.routes').then(m=>m.MENU_ROUTES)
    },
    {
        path:'cart', loadComponent: ()=> import('./features/cart/cart').then(m=>m.Cart)
    },
  { path: '**', redirectTo: '' }
];
