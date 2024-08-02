import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'App Name';
  isShown: boolean = true;
  list: string[];

  selectedUser: string = '';


  num: number = 5;

  constructor() {
    this.list = ['ahmed', 'sara', 'ali', '2'];
  }

  ngOnInit() {
    console.log('welcome #2');
  }


  changeTitle(title: any) {
    console.log(title);
  }

  ngOnDestroy() {
    console.log('welcome #3');
  }


}
