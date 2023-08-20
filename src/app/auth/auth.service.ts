import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = false;

    constructor() {
        this.loggedIn = localStorage.getItem('loggedIn') === 'true';
    }

    login(username: string, password: string): boolean {
        if (username === 'admin' && password === 'admin') {
            this.loggedIn = true;
            localStorage.setItem('loggedIn', 'true');
            return true;
        }
        return false;
    }

    logout(): void {
        this.loggedIn = false;
        localStorage.removeItem('loggedIn');
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }
}



