import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/backend/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor(
    public user: UserService
  ) { }

  ngOnInit() {}

}
