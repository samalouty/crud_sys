import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/modules/shared/interfaces/UserDTO';
import { UserService } from '../services/user.service';
import { ResultViewModel } from 'src/modules/shared/interfaces/ResultViewModel';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  addedUser: UserDTO = {};
  constructor(
    private userService: UserService,
    private _ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }


  ngOnInit() {
    const userId = this._ActivatedRoute.snapshot.params['id'];
    this.GetUser(userId);
  }

  GetUser(userId?: number) {
    debugger
    if(userId == null) return;
    this.userService.GetUser(userId).subscribe((res:ResultViewModel<UserDTO>) => {
      if(res.isSuccess) {
        this.addedUser = res.data;
      } else {
        alert(res.errorMessage)
      }
    })
  }


  UpdateUser(userForm: NgForm) {
    if(userForm.invalid) return;

    this.userService.UpdateUser(this.addedUser).subscribe((res:UserDTO) => {
      this.router.navigateByUrl('/user');
    })
  }


}
