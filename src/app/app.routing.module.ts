import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/modules/user/user/user.component';
import { PageNotFoundComponent } from 'src/layout/page-not-found/page-not-found.component';
import { ProductComponent } from 'src/modules/product/product/product.component';
import { CategoriesComponent } from 'src/modules/product/categories/categories.component';
import { EditUserComponent } from 'src/modules/user/edit-user/edit-user.component';


const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: EditUserComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cat', component: CategoriesComponent},
  {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
