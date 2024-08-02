import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserComponent, EditUserComponent],
  imports: [CommonModule, FormsModule, DialogModule, RouterModule],
  exports: [UserComponent]
})
export class UserModule {}
