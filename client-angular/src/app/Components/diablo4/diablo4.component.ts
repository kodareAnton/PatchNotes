import { Component, OnInit } from '@angular/core';
import { FetchDataDiablo4Service } from 'src/app/Services/fetch-data-diablo4.service';
import { Diablo4Data } from 'src/app/models/Diabl4Data.model';

@Component({
  selector: 'app-diablo4',
  templateUrl: './diablo4.component.html',
  styleUrls: ['./diablo4.component.scss']
})
export class Diablo4Component implements OnInit {
  

  fetchedData: Diablo4Data[] = [];
  
  constructor(private dataService: FetchDataDiablo4Service){}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    this.dataService.fetchData().subscribe(
      (data) =>{
        this.fetchedData = data;
      },
      (error) =>{
        console.error('Error fetching data: ', error)
      }
    )
  }
}
