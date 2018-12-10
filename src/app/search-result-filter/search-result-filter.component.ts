import { Component, HostListener } from '@angular/core';
import { SearchResultsDomainModel } from '../domain-models/search-results.domainmodel';
import  * as models from '../models/models'

export const SEARCH_RESULT_FILTER_SELECTOR = 'search-result-filter';

@Component({
  selector: SEARCH_RESULT_FILTER_SELECTOR,
  templateUrl: './search-result-filter.component.html',
  styleUrls: [
    './search-result-filter.component.css'
  ]
})
export class SearchResultFilterComponent {
    public filterRangeValue: number = 0;
    public lowestAndHighestFare: models.MinMaxFare;
    public showSearchResultFilter: boolean = false;

    constructor(private _searchResultStore: SearchResultsDomainModel) {}

    public showVal(event: any): void {
        this.filterRangeValue = event.target.value;
        this._searchResultStore.setMaxFareForFlight(this.filterRangeValue);
    }

    @HostListener('document:flightResultsLoaded', [])
    public findLowestAndHighestFare(): void {
        let allFlightResults = this._searchResultStore.state.onwardsFlights.concat(this._searchResultStore.state.returnFlights);
        this.showSearchResultFilter = true;
        this.lowestAndHighestFare = new models.MinMaxFare();
        this.lowestAndHighestFare.lowestFare = allFlightResults.reduce((min, p) => p.fare < min ? p.fare : min, allFlightResults[0].fare);
        this.lowestAndHighestFare.highestFare = allFlightResults.reduce((max, p) => p.fare > max ? p.fare : max, allFlightResults[0].fare);
        this.filterRangeValue = this.lowestAndHighestFare.highestFare;
        this._searchResultStore.setMaxFareForFlight(this.lowestAndHighestFare.highestFare);
    }
}
