import * as models from '../models/models';
export class SearchResultsState {
  public onwardsFlights: models.SearchResultModel[] = [];
  public returnFlights: models.SearchResultModel[] = [];
  public isSearchOneWay: boolean = true;
  public maxFareForFlight: number = 0;
  public departureCity: string = '';
  public arrivalCity: string = '';
  public hasSearched: boolean = false;
}
