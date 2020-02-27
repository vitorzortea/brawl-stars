import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelComponent } from './painel.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [PainelComponent, HeaderComponent],
  imports: [
    CommonModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
