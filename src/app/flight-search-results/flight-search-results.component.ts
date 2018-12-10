import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchResultsDomainModel } from '../domain-models/search-results.domainmodel';
import { SearchResultFilter } from '../pipes/search-result-filter.pipe';

export const FLIGHT_SEARCH_RESULT_SELECTOR = 'flight-search-results';

@Component({
  selector: FLIGHT_SEARCH_RESULT_SELECTOR,
  templateUrl: './flight-search-results.component.html',
  styleUrls: [
    './flight-search-results.component.css'
  ]
})
export class FlightSearchResultsComponent {

constructor(
  public _searchResultsStore: SearchResultsDomainModel
) {}

public searchFlight: FormGroup = new FormGroup({
    onwards: new FormControl('', [Validators.required]),
    return: new FormControl('', [Validators.required])
  });
}
