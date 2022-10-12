import { Component, OnInit } from '@angular/core';
import { CARS } from '../cars/cars';




interface Car {
  brand: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  
  cars: Car[] = CARS;
  searchText: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
