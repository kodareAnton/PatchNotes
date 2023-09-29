import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  start(): void {
    const body = document.getElementsByTagName('body')[0]
    body.id = 'loading'
  };

  stop(){
    console.log('stop loading');
  }
}
