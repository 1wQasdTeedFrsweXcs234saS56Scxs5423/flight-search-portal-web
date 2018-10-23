import * as models from '../models/models';
export class SearchResultsState {
  public onwardsFlights: models.SearchResultModel[] = [];
  public returnFlights: models.SearchResultModel[] = [];
  public isSearchOneWay: boolean = true;
}
