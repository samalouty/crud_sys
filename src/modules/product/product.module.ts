import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, CategoriesComponent]
})
export class ProductModule { }
