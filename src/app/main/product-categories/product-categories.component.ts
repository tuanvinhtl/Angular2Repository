import { DataService } from './../../core/services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  productCategories: any[] = [];
  keyWord: string = '';
  pageIndex: number = 1;
  pageSize: number = 20;
  totalRow: number = 0;
  model:any = {};
  @ViewChild('childModal') childModal: ModalDirective;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.listProductCategory();
  }

  listProductCategory() {
    this.dataService.get("/api/productCategory/getPagination?keyWord=" + this.keyWord + "&page=" + this.pageIndex + "&pageSize=" + this.pageSize).subscribe((response: any) => {
      this.productCategories = response.Items;
      this.pageIndex = response.PageIndex;
      this.pageSize = response.PageSize;
      this.totalRow = response.TotalRows;
    }, error => this.dataService.handleError(error))

  }

  pageChanged(event: any): void {
    this.pageIndex = (event.page);
    this.listProductCategory();
  }

  showChildModal(): void {
    this.childModal.show();

  }
  cancel() {
    this.hideChildModal()
  }

  hideChildModal(): void {
    this.childModal.hide();
  }


}
