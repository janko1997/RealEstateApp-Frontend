import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseingService } from 'src/app/services/houseing.service';
import { IProperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;

  constructor(
    private route: ActivatedRoute,
    private houseingService: HouseingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; //Means we are on rent-property URL else we are on base URL
    }
    this.houseingService.getAllproperties(this.SellRent).subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
