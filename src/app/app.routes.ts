import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { EditProfileComponent } from './core/guards/edit-profile.component';
import { CanDeactivateGuard } from './core/guards/can-deactive.guard';

export const routes: Routes = [
    {path:'', component: Home},
    {
        path:'menu', loadChildren: ()=> import('./features/menu/menu.routes').then(m=>m.MENU_ROUTES)
    },
    {
        path:'cart', loadComponent: ()=> import('./features/cart/cart').then(m=>m.Cart)
    },
    {
        path:'checkout', loadComponent: ()=> import('./features/checkout/checkout').then(m=>m.Checkout)
    },
    { path: 'profile/edit', component: EditProfileComponent, canDeactivate: [CanDeactivateGuard] },

  { path: '**', redirectTo: '' }
];
