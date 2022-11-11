import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CoreService } from '../core/core.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate, CanActivateChild {
  constructor(private coreService: CoreService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.isNotAuthenticated();
  }

  private isNotAuthenticated(): boolean {
    if (!this.coreService.isAutheticated()) {
      return true;
    }

    this.router.navigate(['/matches']);

    return false;
  }
}
