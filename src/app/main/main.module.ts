import { NotificationService } from './../core/services/notification.service';
import { HttpModule } from '@angular/http';

import { UtilityService } from './../core/services/utility.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { AuthenService } from '../core/services/authen.service';
import { DataService } from '../core/services/data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    HttpModule 
  ],
  declarations: [MainComponent],
  providers:[UtilityService,AuthenService,DataService,NotificationService]
})
export class MainModule { }
