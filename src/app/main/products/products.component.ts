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

  data=[];

  ngOnInit() {
   this.listProduct();

  }
  listProduct(){
    this.dataService.get("/api/product/getall").subscribe((response:any)=>{
      this.data=response;
      console.log(this.data);
    }, error=> this.dataService.handleError(error))
  }

}
