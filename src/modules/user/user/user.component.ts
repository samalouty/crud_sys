import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDTO } from 'src/modules/shared/interfaces/UserDTO';
import { UserService } from '../services/user.service';
import { ResultViewModel } from 'src/modules/shared/interfaces/ResultViewModel';
import { error } from 'console';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  UserList: UserDTO[] = [];
  addedUser: UserDTO = {};
  viewUser: UserDTO = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.GetUsers();
  }

  GetUsers() {
    this.userService.GetAllUser().subscribe((res: ResultViewModel<UserDTO[]>) => {
        if (res.isSuccess) {
          this.UserList = res.data;
        } else {
          alert(res.errorMessage);
        }
      });
  }

  AddUser(userForm: NgForm) {
    if (userForm.invalid) {
      return;
    }

    this.userService.AddUser(this.addedUser).subscribe((res: UserDTO) => {
      alert("user added succsessfully")
      this.GetUsers();
    })

    userForm.reset();
  }


  DeleteUser(userId?: number) {
    if(userId == null) return;
    this.userService.DeleteUser(userId).subscribe((res:ResultViewModel<boolean>) => {
      if(res.isSuccess) {
        alert('User deleted succssefully');
        this.GetUsers();
      } else {
        alert(res.errorMessage)
      }
    })
  }


  GetUser(userId?: number) {
    if(userId == null) return;
    this.userService.GetUser(userId).subscribe((res:ResultViewModel<UserDTO>) => {
      if(res.isSuccess) {
        this.viewUser = res.data;
        this.showDialog();
      } else {
        alert(res.errorMessage)
      }
    })
  }

  visible: boolean = false;
  showDialog() {
    this.visible = true
  }
}
