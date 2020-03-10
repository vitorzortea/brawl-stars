import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = {
    id : 'QG0COQCC',
    name: 'Zortéa Front',
    colorName: 1,
    avatar: 'icon1',
    level: 141,
    levelStars: 482,
    nextLevelStars: 1440,
    //recordes
    trovel: 15482,
    poder: 258,
    drsafios: 4,
    games: 931,
    combate: 469,
    combateDupla: 2203,
    caos: '5m 56s',
    boss: '1m 37s',
    bossNuvel: 'Mestre',
  }

  public avatar = [
    'icon1',
    'icon2',
    'icon3',
    'icon4',
    'icon5',
    'icon6',
    'icon7',
    'icon8',
    'icon9',
    'icon10',
    'icon11',
    'icon12',
    'icon13',
    'icon14',
    'icon15',
    'icon16',
    'icon17',
    'icon18',
    'icon19',
    'icon20',
    'icon21',
    'icon22',
    'icon23',
    'icon24',
    'icon25',
    'icon26',
    'icon27',
    'icon28',
    'icon29',
    'icon30',
    'icon31',
    'icon32',
    'icon33',
    'icon34',
    'icon35',
    'icon36',
    'icon37',
    'icon38',
    'icon39',
    'icon40',
    'icon41',
    'icon42',
    'icon43',
    'icon44',
    'icon45',
    'icon46',
  ]

  public nameColor = [
    '#ffffff',
    '#a2e4fe',
    '#4ddba1',
    '#f9982f',
    '#f9775d',
    '#ee5738',
    '#f9c907',
    '#ffce89',
    '#a8e132',
    '#1ca5f5',
    '#ff8bfd',
    '#cb5bff',
  ]


  constructor() { }


}
