import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/backend/user.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.styl']
})
export class InterfaceComponent implements OnInit {
  public link = '/painel';
  constructor(
    public user: UserService
  ) { }

  ngOnInit() {
  }

}
