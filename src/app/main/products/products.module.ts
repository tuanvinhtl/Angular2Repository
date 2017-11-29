import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {FormsModule} from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
export const productRoute: Routes = [
  { path: '', component: ProductsComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoute),
    PaginationModule,
    FormsModule
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
