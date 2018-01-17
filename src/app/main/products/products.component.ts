import { SystemContants } from './../../core/common/system.constants';
import { Response } from '@angular/http';
import { MessageContstants } from './../../core/common/message.constants';
import { NotificationService } from './../../core/services/notification.service';
import { UrlConstants } from './../../core/common/url.constants';
import { DataService } from './../../core/services/data.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { parse } from 'url';
import { UploadService } from '../../core/services/upload.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {

  @ViewChild('childModal') childModal: ModalDirective;
  @ViewChild('image') image;

  constructor(private dataService: DataService, private _notificationService: NotificationService, private uploadservice: UploadService) { }

  private data = [];
  private pageIndex: number = 0;
  private pageSize: number = 10;
  private totalRow: number = 5;
  private keyWord: string = '';
  private model: any = {};
  private productCategories = [];
  totalItems = 64;
  currentPage = 4;
  smallnumPages = 0;
  public urlApi: string = SystemContants.BASE_API;


  ngOnInit() {
    this.listProductCategory();
    this.listProduct();
  }


  editEntity(id: number) {
    this.model = {};
    this.dataService.get("/api/product/getbyid/" + id).subscribe((response: any) => {
      this.model = response;
      this.showChildModal();

    }, error => this.dataService.handleError(error))
  }


  Changes($event) {
    this.model.Status = $event;
  }


  exportExcel(id: number) {
    this.dataService.get("/api/product/export/" + id).subscribe((response: any) => {
      window.open(SystemContants.BASE_API + response.Message)

    }, error => this.dataService.handleError(error))
  }

  deteleEntity(id: string) {
    this._notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => {
      this.dataService.delete("/api/product/detele?", "id", id).subscribe((response: any) => {
        this._notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
        this.listProduct();
      }, error => this.dataService.handleError(error));
    });
  }

  keyupHandlerFunction(e: any) {
    this.model.Content = e;
  }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
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

  pageChanged(event: any): void {
    this.pageIndex = (event.page);
    this.listProduct();
  }

  //load list product
  listProduct() {
    this.dataService.get("/api/product/getPagination?keyWord=" + this.keyWord + "&page=" + this.pageIndex + "&pageSize=" + this.pageSize).subscribe((response: any) => {

      this.data = response.Items;
      this.pageIndex = response.PageIndex;
      this.pageSize = response.PageSize;
      this.totalRow = response.TotalRows;

    }, error => this.dataService.handleError(error))
  }

  //get list product for select tag
  listProductCategory() {
    this.dataService.get("/api/productCategory/getall").subscribe((response: any) => {
      this.productCategories = response;

    }, error => this.dataService.handleError(error))

  }

  //submit for add or update
  onSubmit() {
    let fi = this.image.nativeElement;
    if (fi.files.length > 0) {
      this.uploadservice.postWithFile("/api/upload/saveImage/", null, fi.files).then((imageUrl: string) => {
        this.model.Images = imageUrl;
      }).then(() => {
        this.saveData();
      })
    }
    else {
      this.saveData();
    }
    console.log(fi)
  }
  saveData() {
    if (this.model.ID == null || this.model.ID == undefined) {
      this.dataService.post("/api/product/create/", JSON.stringify(this.model)).subscribe((response: any) => {
        this.hideChildModal();
        this.listProduct();
        this._notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG + " " + response.Name)
      }, error => this.dataService.handleError(error));
    }
    else {
      this.dataService.put("/api/product/update/", JSON.stringify(this.model)).subscribe((response: any) => {
        this.hideChildModal();
        this.listProduct();
        this._notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG + " " + response.Name)
      }, error => this.dataService.handleError(error));
    }
  }




}
