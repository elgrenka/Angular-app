import {Injectable} from '@angular/core';
import {
    CanActivateChild,
    CanLoad,
    Route,
    UrlSegment,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree {
        return this.checkAuth();
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkAuth();
    }

    private checkAuth(): boolean | UrlTree {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        return this.router.createUrlTree(['/login']);
    }
}
