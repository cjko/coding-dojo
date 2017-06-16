import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AppComponent },
  { path: 'selectCity', component: CitySelectorComponent },
  { path: 'show/:city', component: CityWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
