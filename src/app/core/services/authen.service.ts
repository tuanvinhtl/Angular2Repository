import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SystemContants } from '../common/system.constants';
import { LoggedInUser } from '../domain/loggedin.user';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenService {

  constructor(private _http: Http ) { }

  login(username: string, password: string) {
    let body = "userName=" +username+
      "&password=" + password +
      "&grant_type=password";
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let options = new RequestOptions({ headers: headers });

    return this._http.post(SystemContants.BASE_API + '/oauth/token', body, options).map((res:Response) => {
      let user: LoggedInUser = res.json();
      if (user && user.access_token) {
        localStorage.removeItem(SystemContants.CURRENT_USER);
        localStorage.setItem(SystemContants.CURRENT_USER, JSON.stringify(user));
      }
    });
  }
  logout() {
    localStorage.removeItem(SystemContants.CURRENT_USER);
  }
  isUserAuthenticated(): boolean {
    let user = localStorage.getItem(SystemContants.CURRENT_USER);
    if (user != null) {
      return true;
    }
    else {
      false;
    }
  }
  getLoggedInUser(): LoggedInUser {
    if (this.isUserAuthenticated) {
      var userData = JSON.parse(localStorage.getItem(SystemContants.CURRENT_USER));
      var user = new LoggedInUser(userData.access_token, userData.admin, userData.fullName, userData.email, userData.avatar);
      return user;
    }
  }
}
