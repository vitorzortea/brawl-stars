import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/backend/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.styl']
})
export class NameComponent implements OnInit {
  public link = '/user';
  public title = 'SELECIONAR COR';

  constructor(
    public user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  tocarNome(index){
    this.user.user.colorName = index
    this.router.navigate(['/user/informacoes'])
  }

}
