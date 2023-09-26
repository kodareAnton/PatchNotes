import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Diablo4Component } from './Components/diablo4/diablo4.component';
import { GamesComponent } from './Components/games/games.component';

const routes: Routes = [
  {path: '', component: GamesComponent },
  {path: 'diablo4', component: Diablo4Component },
  // {path: 'Home', component: Diablo4Component },
  // {path: 'Home', component: Diablo4Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
