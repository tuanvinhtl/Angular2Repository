import { UrlConstants } from './../common/url.constants';
import { SystemContants } from './../common/system.constants';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterState } from '@angular/router/src/router_state';


@Injectable()
export class AuthenGuard implements CanActivate {

  constructor(private route: Router) {

  }
  canActivate(activatedSnapShot: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    if (localStorage.getItem(SystemContants.CURRENT_USER) != null) {
      return true;
    }
    else {
      this.route.navigate([UrlConstants.LOGIN], { queryParams: { returnUrl: routerState.url } });
      return false;

    }

  }

}
