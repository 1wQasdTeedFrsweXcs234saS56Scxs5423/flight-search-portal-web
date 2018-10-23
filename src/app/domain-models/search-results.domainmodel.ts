import { Injectable } from '@angular/core';
import { Store } from './store';
import * as models from '../models/models';
import { SearchResultsState } from './search-results.state';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsDomainModel extends Store<SearchResultsState> {
  constructor() {
    super(new SearchResultsState());
  }

  public setOnwardFlightSearchResults(searchResults: models.SearchResultModel[]): void {
    this.setState({
      ...this.state,
      onwardsFlights: searchResults
    });
  }

  public setReturnFlightSearchResults(searchResults: models.SearchResultModel[]): void {
    this.setState({
      ...this.state,
      returnFlights: searchResults
    });
  }

  public setOneWaySearch(isSearchOneWay: boolean): void {
    this.setState({
      ...this.state,
      isSearchOneWay: isSearchOneWay
    });
  }
}
