import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NameComponent } from './name/name.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'estatistica'
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'estatistica',
        component: InterfaceComponent
      },
      {
        path: 'avatar',
        component: AvatarComponent
      },
      {
        path: 'nome',
        component: NameComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
