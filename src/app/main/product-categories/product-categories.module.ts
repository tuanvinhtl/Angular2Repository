import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesComponent } from './product-categories.component';

export const productCategoryRoute: Routes = [
  { path: '', component: ProductCategoriesComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productCategoryRoute)
  ],
  declarations: [ProductCategoriesComponent]
})
export class ProductCategoriesModule { }
