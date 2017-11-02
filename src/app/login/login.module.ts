import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

export const loginRoute:Routes=[
  {path:'',component:LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
