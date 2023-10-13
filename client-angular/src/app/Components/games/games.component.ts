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
      router: 'diablo4',
      icons: '',
      isWip: false,
    },
    {
      name: 'Cs2',
      genre: 'first person shooter',
      src: '../../assets/images/cs2.jpg',
      router: 'diablo4',
      icons: '',
      isWip: true,
    },
    {
      name: 'Fortnite',
      genre: 'battle royale',
      src: '../../assets/images/fortnite.png',
      router: 'diablo4',
      icons: '',
      isWip: true,
    },
    {
      name: 'Valorant',
      genre: 'hero/tactical shooter',
      src: '../../assets/images/valorant.webp',
      router: 'diablo4',
      icons: '',
      isWip: true,
    },
    {
      name: 'Overwatch 2',
      genre: 'team-based action',
      src: '../../assets/images/overwatch2.webp',
      router: 'diablo4',
      icons: '',
      isWip: true,
    }
  ]

}
