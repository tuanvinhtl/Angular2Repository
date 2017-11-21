import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { MessageContstants } from '../core/common/message.constants';
import { UrlConstants } from '../core/common/url.constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  model: any = [];
  returnUrl: string;
  constructor(private router: Router, private _authenService: AuthenService, private _notificationService: NotificationService) { }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("nav-md");
    body.classList.add("login");
  }

  login()
   {
    this._authenService.login(this.model.username, this.model.password).subscribe(data => {
      this.router.navigate([UrlConstants.HOME]);
    }, error => {
      this._notificationService.printErrorMessage(MessageContstants.SYSTEM_ERROR_MSG);
      this.loading = false;
    });
  }


}
