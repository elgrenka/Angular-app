import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedIn = false;

    constructor() {
        // Проверяем состояние авторизации при инициализации сервиса
        this.loggedIn = localStorage.getItem('loggedIn') === 'true';
    }

    login(username: string, password: string): boolean {
        // Проверка введенных данных и сохранение состояния авторизации
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


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//     private loggedIn = false;
//
//     login(username: string, password: string): boolean {
//         // Проверка введенных данных и сохранение состояния авторизации
//         if (username === 'admin' && password === 'admin') {
//             this.loggedIn = true;
//             localStorage.setItem('loggedIn', 'true');
//             return true;
//         }
//         return false;
//     }
//
//     logout(): void {
//         this.loggedIn = false;
//         localStorage.removeItem('loggedIn');
//     }
//
//     isLoggedIn(): boolean {
//         return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
//     }
//   constructor() { }
// }
