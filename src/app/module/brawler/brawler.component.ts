import { Component, OnInit } from '@angular/core';
import { BrawlersService } from 'src/app/backend/brawlers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brawler',
  templateUrl: './brawler.component.html',
  styleUrls: ['./brawler.component.styl']
})
export class BrawlerComponent implements OnInit {

  constructor(
    public brawl: BrawlersService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  trocarBrawl(i) {
    this.brawl.brawlerSelect = this.brawl.brawlerList[i];
    this.router.navigate(['/painel']);
  }

}
