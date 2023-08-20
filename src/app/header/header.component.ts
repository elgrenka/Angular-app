import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isLoggedIn: boolean | undefined;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        // this.updateLoginStatus();
        this.isLoggedIn = this.authService.isLoggedIn();
    }

    private updateLoginStatus(): void {
        this.isLoggedIn = this.authService.isLoggedIn();
    }

    logout(): void {
        this.authService.logout();
        // this.updateLoginStatus();
        this.isLoggedIn = false;

        this.router.navigate(['/login']);
    }
}

