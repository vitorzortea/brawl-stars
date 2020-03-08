import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { InterfaceComponent } from './interface/interface.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';


@NgModule({
  declarations: [UserComponent, InterfaceComponent, HeaderComponent, AvatarComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
