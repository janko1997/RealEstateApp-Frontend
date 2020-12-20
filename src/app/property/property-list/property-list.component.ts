import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      id: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
    {
      id: 2,
      Name: 'Erotokritos Villa',
      Type: 'House',
      Price: 12000,
    },
    {
      id: 3,
      Name: 'Moggolo House',
      Type: 'House',
      Price: 19000,
    },
    {
      id: 4,
      Name: 'Villa House',
      Type: 'House',
      Price: 26000,
    },
    {
      id: 5,
      Name: 'Janko House',
      Type: 'House',
      Price: 11400,
    },
    {
      id: 6,
      Name: 'Macro Home',
      Type: 'House',
      Price: 14300,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
