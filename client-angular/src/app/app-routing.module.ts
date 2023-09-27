import { NgModule, inject } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivateFn, RouterModule,  RouterStateSnapshot,  Routes} from '@angular/router';
import { Diablo4Component } from './Components/diablo4/diablo4.component';
import { GamesComponent } from './Components/games/games.component';
import { Observable, delay, map, tap, timer } from 'rxjs';
import { FetchDataDiablo4Service } from './Services/fetch-data-diablo4.service';
import { LoadingService } from './Services/loading/loading.service';

const diablo4Guard:CanActivateFn = function(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>{
 
  const fetchd4Service = inject(FetchDataDiablo4Service);
  const loading = inject(LoadingService)

  loading.start();

  return fetchd4Service.fetchData().pipe(
    delay(10000),
    map((data)=>{
      console.log(data);
      loading.stop();
      return true
    })
  );
}

const routes: Routes = [
  {path: '', component: GamesComponent },
  {path: 'diablo4', component: Diablo4Component, canActivate: [diablo4Guard] },
  // {path: 'Home', component: Diablo4Component },
  // {path: 'Home', component: Diablo4Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
