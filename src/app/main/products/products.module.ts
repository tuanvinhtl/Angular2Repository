import { TityMceComponent } from './../../shared/tity-mce/tity-mce.component';
import { ModalModule,PaginationModule,TabsModule  } from 'ngx-bootstrap';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {FormsModule} from '@angular/forms';


export const productRoute: Routes = [
  { path: '', component: ProductsComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoute),
    PaginationModule,
    FormsModule,
    ModalModule,
    TabsModule
  ],
  declarations: [ProductsComponent,TityMceComponent]
})
export class ProductsModule { }
