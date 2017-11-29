import { UrlConstants } from './../../core/common/url.constants';
import { DataService } from './../../core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { SystemContants } from '../../core/common/system.constants';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  private data = [];
  private pageIndex: number = 0;
  private pageSize: number = 10;
  private totalRow: number = 5;
  private keyWord: string = '';

  ngOnInit() {
    this.listProduct();

  }
  totalItems = 64;
  currentPage = 4;
  smallnumPages = 0;
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  pageChanged(event: any): void {
    this.pageIndex=(event.page);

    this.listProduct();
  }
  listProduct() {
    this.dataService.get("/api/product/getPagination?keyWord=" + this.keyWord + "&page=" + this.pageIndex + "&pageSize=" + this.pageSize).subscribe((response: any) => {

      this.data = response.Items;
      this.pageIndex=response.PageIndex;
      this.pageSize=response.PageSize;
      this.totalRow=response.TotalRows;

    }, error => this.dataService.handleError(error))
  }

}
