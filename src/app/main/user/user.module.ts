import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';

export const userRoute: Routes = [
  { path: '', component: UserComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoute)
  ],
  declarations: [UserComponent]
})
export class UserModule { }
