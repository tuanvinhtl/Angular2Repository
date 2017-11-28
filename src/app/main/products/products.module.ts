import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

export const productRoute: Routes = [
  { path: '', component: ProductsComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoute)
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
