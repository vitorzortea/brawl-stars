import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrawlerComponent } from './brawler.component';


const routes: Routes = [
  {
    path: '',
    component: BrawlerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrawlerRoutingModule { }
