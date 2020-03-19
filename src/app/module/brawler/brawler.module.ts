import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrawlerRoutingModule } from './brawler-routing.module';
import { BrawlerComponent } from './brawler.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [BrawlerComponent, HeaderComponent],
  imports: [
    CommonModule,
    BrawlerRoutingModule
  ]
})
export class BrawlerModule { }
