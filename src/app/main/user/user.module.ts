import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
export const userRoute: Routes = [
  { path: '', component: UserComponent }
]
@NgModule({
  imports: [
    CommonModule,
    AmexioWidgetModule,
    RouterModule.forChild(userRoute)
  ],
  declarations: [UserComponent]
})
export class UserModule { 

  data:any[]=[]
}
