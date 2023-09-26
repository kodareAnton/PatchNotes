import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Diablo4Data } from '../models/Diabl4Data.model';


@Injectable({
  providedIn: 'root'
})
export class FetchDataDiablo4Service {

  private baseUrl = 'http://localhost:3000/games/d4';

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Diablo4Data[]> {
  
    return this.http.get<Diablo4Data[]>(this.baseUrl);
  }

}
