import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './property/nav-bar/nav-bar.component';
import { HouseingService } from './services/houseing.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [HouseingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
