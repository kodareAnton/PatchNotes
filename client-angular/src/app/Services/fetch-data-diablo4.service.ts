import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Diablo4Data } from '../models/Diabl4Data.model';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root',
})
export class FetchDataDiablo4Service {
  private baseUrl = 'http://localhost:3000/api/games/d4';
  private dataSubject: Subject<Diablo4Data[]> = new BehaviorSubject<
    Diablo4Data[]
  >([]);

  constructor(private http: HttpClient) {}

  fetchData(): Observable<Diablo4Data[]> {
    return this.http.get<Diablo4Data[]>(this.baseUrl).pipe(
      tap((d4data) => {
        this.dataSubject.next(d4data);
      })
    );
  }

  getData(): Observable<Diablo4Data[]> {
    return this.dataSubject.asObservable();
  }
}
