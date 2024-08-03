import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './services/product.service';

import { AppComponent } from 'src/app/app.component';
@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    BrowserModule
  ],
  declarations: [ProductComponent, CategoriesComponent],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class ProductModule { }
