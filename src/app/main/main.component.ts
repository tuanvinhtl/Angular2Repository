import { AuthenService } from './../core/services/authen.service';
import { UrlConstants } from './../core/common/url.constants';
import { UtilityService } from './../core/services/utility.service';
import { Component, OnInit } from '@angular/core';
import { SystemContants } from '../core/common/system.constants';
import { LoggedInUser } from '../core/domain/loggedin.user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private ultilityService: UtilityService,private authenService:AuthenService) { }

  user:LoggedInUser;

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("login");
    body.classList.add("nav-md");
    this.user=JSON.parse(localStorage.getItem(SystemContants.CURRENT_USER));
  }

  logout(){
    localStorage.removeItem(SystemContants.CURRENT_USER);
    this.ultilityService.navigate(UrlConstants.LOGIN);
  }
}
