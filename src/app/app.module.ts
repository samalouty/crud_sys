import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from 'src/modules/user/user.module';
import { HeaderComponent } from 'src/layout/header/header.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/modules/user/user/user.component';
import { PageNotFoundComponent } from 'src/layout/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    //Built-In
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //UserDefined
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
