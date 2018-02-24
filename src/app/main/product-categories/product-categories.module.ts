import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesComponent } from './product-categories.component';
import { ModalModule, PaginationModule} from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

export const productCategoryRoute: Routes = [
  { path: '', component: ProductCategoriesComponent }
]
@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    PaginationModule,
    FormsModule,
    RouterModule.forChild(productCategoryRoute)
  ],
  declarations: [ProductCategoriesComponent]
})
export class ProductCategoriesModule { }
