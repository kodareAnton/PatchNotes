import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  start(){
    console.log('start loading');
    
  };

  stop(){
    console.log('stop loading');
  }
}
