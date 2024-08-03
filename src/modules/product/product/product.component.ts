import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/modules/shared/interfaces/ProductDTO';
import { ProductService } from '../services/product.service';
import { ResultViewModel } from 'src/modules/shared/interfaces/ResultViewModel';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductList: ProductDTO[] = [];
  // ProductList: ProductDTO[] = [
  //   {
  //     Id: 1,
  //     Title: "PS5 digital edition",
  //     Price: "449",
  //     Description: "CDs not allowed",
  //     ImageURL: "https://blog.playstation.com/tachyon/2023/10/cd56722db7b991b3d7a33f1bafd55f80d0ac553d.png?resize=1088%2C612&crop_strategy=smart",
  //     RatingCount: 330000,
  //     RatingValue: 4,
  //     CategoryId: 1,
  //     CategoryName: undefined
  //   }];
  addedProduct: ProductDTO = {};
  viewProduct: ProductDTO = {};

  
  constructor(private ps : ProductService) {


   }

  ngOnInit() {
    this.GetProducts(); 
    console.log(this.ProductList)
  }

  GetProducts() {
    this.ps.GetAllProduct().subscribe((res: ResultViewModel<ProductDTO[]>) => {
        if (res.isSuccess) {
          this.ProductList = res.data;
        } else {
          alert(res.errorMessage);
        }
      });
  }

}
