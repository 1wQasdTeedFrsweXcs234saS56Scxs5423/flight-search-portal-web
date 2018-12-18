import { Routes } from '@angular/router';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { FlightSearchResultsComponent } from './flight-search-results';

export const ROUTES: Routes = [
  { path: '', component: FlightSearchResultsComponent },
  { path: '**', component: NoContentComponent }
];
