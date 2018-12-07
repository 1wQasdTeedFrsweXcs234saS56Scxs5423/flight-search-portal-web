import { Component } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

export const FLIGHT_SEARCH_RESULT_SELECTOR = 'flight-search-results';

@Component({
  selector: FLIGHT_SEARCH_RESULT_SELECTOR,
  templateUrl: './flight-search-results.component.html',
  styleUrls: [
    './flight-search-results.component.css'
  ]
})
export class FlightSearchResultsComponent {
  public faUtensils: any = faUtensils;

}
