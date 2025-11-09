import { inject, Injectable } from "@angular/core";
import { CanActivate, CanActivateFn, Router } from "@angular/router";
import { AuthoService } from "../services/autho.service";

// @Injectable({providedIn: 'root'})
export const AuthoGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthoService);
    const router = inject(Router);

    if(auth.isLoggedIn){
        return true;
    }

    return router.createUrlTree(['/login'], {queryParams: {returnUrl: state.url}});
}