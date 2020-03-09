import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { InterfaceComponent } from './interface/interface.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NameComponent } from './name/name.component';


@NgModule({
  declarations: [UserComponent, InterfaceComponent, HeaderComponent, AvatarComponent, NameComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
