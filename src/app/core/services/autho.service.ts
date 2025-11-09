import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthoService{
    private isLogedIn$ = new BehaviorSubject<boolean>(false);
    logedInStatus$ = this.isLogedIn$.asObservable();

    /**
     * Cambia el estado de logueo
     */
    setLogedIn(status: boolean){
        this.isLogedIn$.next(status);
    }

    get token(): string | null {return localStorage.getItem('token')}
    get isLoggedIn(): boolean {return !!this.token}

    login(token: string){
        localStorage.setItem('token', token);
        this.isLogedIn$.next(true);
    }

    logout(){
        localStorage.removeItem('token');
        this.isLogedIn$.next(false);
    }

    refreshToken(): Observable<boolean>{
        return of(true)
    }
}