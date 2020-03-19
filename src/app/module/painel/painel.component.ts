import { Component, OnInit } from '@angular/core';
import { BrawlersService } from 'src/app/backend/brawlers.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.styl']
})
export class PainelComponent implements OnInit {

  constructor(
    public brawlers: BrawlersService
  ) { }

  ngOnInit() {
  }

}
