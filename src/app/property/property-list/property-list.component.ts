import { Component, OnInit } from '@angular/core';
import { HouseingService } from 'src/app/services/houseing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: any;
  constructor(private HouseingService: HouseingService) {}

  ngOnInit(): void {
    this.HouseingService.getAllproperties().subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
