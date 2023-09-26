import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  games = [
    {
      name: 'Diablo IV',
      genre: 'action rpg',
      src: '../../assets/images/diablo4.webp',
      icons: '',
    },
    {
      name: 'Cs2',
      genre: 'first person shooter',
      src: '../../assets/images/cs2.jpg',
      icons: '',
    },
    {
      name: 'Fortnite',
      genre: 'battle royal',
      src: '../../assets/images/fortnite.png',
      icons: '',
    },
    {
      name: 'Valorant',
      genre: 'hero shooter / tactical shooter',
      src: '../../assets/images/valorant.webp',
      icons: '',
    },
    {
      name: 'Overwatch 2',
      genre: 'team-based action',
      src: '../../assets/images/overwatch2.webp',
      icons: '',
    }
  ]

}
