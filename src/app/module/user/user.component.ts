import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/backend/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.styl']
})
export class UserComponent implements OnInit {
  public teste = "teste2";

  constructor(
    public user: UserService
  ) { }

  ngOnInit() {
  }

}
