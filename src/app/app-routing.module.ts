import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'painel'
  },
  {
    path: 'painel',
    loadChildren: './module/painel/painel.module#PainelModule'
  },
  {
    path: 'user',
    loadChildren: './module/user/user.module#UserModule'
  },
  {
    path: 'brawlers',
    loadChildren: './module/brawler/brawler.module#BrawlerModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
