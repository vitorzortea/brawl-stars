import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  @Input() linkVoltar;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
