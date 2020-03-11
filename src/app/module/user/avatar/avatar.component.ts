import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/backend/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.styl']
})
export class AvatarComponent implements OnInit {
  public link = '/user';
  public title = 'SELECIONAR ÍCONE';

  constructor(
    public user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  alterarAvatar(avatar) {
    this.user.user.avatar = avatar
    this.router.navigate(['/user/estatistica'])
  }

}
