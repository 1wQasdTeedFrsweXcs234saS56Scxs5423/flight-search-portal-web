import { Component, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchResultsDomainModel } from '../domain-models/search-results.domainmodel';
import { SearchResultFilter } from '../pipes/search-result-filter.pipe';
import { SelectedFlightsDomainModel } from '../domain-models/selected-flights.domainmodel';
import { ResolveCityName } from '../pipes/city-name.pipe';
import { AppServices } from '../services/app/app.services';

export const FLIGHT_SEARCH_RESULT_SELECTOR = 'flight-search-results';

@Component({
  selector: FLIGHT_SEARCH_RESULT_SELECTOR,
  templateUrl: './flight-search-results.component.html',
  styleUrls: [
    './flight-search-results.component.css'
  ]
})
export class FlightSearchResultsComponent {

  public tripCost: number = 0;

  constructor(
    public _searchResultsStore: SearchResultsDomainModel,
    public _selectedFlightsStore: SelectedFlightsDomainModel,
    public _appServices: AppServices
  ) {}

  public searchFlight: FormGroup = new FormGroup({
    onwards: new FormControl('', [Validators.required])
  });

  @HostListener('document:searchModeSelection', ['$event'])
  public searchModeChanged(event) {
    if (event.detail === 'oneWay') {
      this.searchFlight.removeControl('return');
      this._searchResultsStore.setOneWaySearch(true);
    } else {
      this.searchFlight.addControl('return', new FormControl('', Validators.required));
      this._searchResultsStore.setOneWaySearch(false);
    }
  }

  public calculateTripCost($event: any, tripType: string) {
    if (this._searchResultsStore.state.isSearchOneWay) {
      let onwardsFlight = this.searchFlight.controls['onwards'].value;
      alert(onwardsFlight);
    } else {

    }
  }

  public resetSearch() {
    this._searchResultsStore.setHasSearched(false);
    this._searchResultsStore.setArrivalCity('');
    this._searchResultsStore.setDepartureCity('');
    this._searchResultsStore.setOneWaySearch(false);
    this._searchResultsStore.setOnwardFlightSearchResults([]);
    this._searchResultsStore.setReturnFlightSearchResults([]);

    this.searchFlight.controls.onwards.setValue('');
    !!this.searchFlight.controls.return && this.searchFlight.controls.return.setValue('');

    // reset form
    this._appServices.trigger('resetSearchForm');
  }
}
