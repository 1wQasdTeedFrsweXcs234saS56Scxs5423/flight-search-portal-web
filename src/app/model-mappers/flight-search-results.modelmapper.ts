import { Injectable } from '@angular/core';
import * as models from '../models/models';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchResultsModelmapper {

  public buildFlightSearchResults(isOneWay: boolean, dto: any) {
    let searchResults = {};
    let onwardSearchResults: models.SearchResultModel[] = [];
    let returnSearchResults: models.SearchResultModel[] = [];

    _.forEach(dto.onward, function (flight: any) {
      let searchResult: models.SearchResultModel = new models.SearchResultModel();

      searchResult.operator = flight.operator;
      searchResult.flightNumber = flight.flightNumber;
      searchResult.departureDate = flight.departureDate;
      searchResult.departureTime = flight.departureTime;
      searchResult.duration = flight.duration;
      searchResult.arrivalDate = flight.arrivalDate;
      searchResult.arrivalTime = flight.arrivalTime;
      searchResult.isMealIncluded = flight.isMealIncluded;
      searchResult.arrivalCity = flight.arrivalCity;
      searchResult.arrivalCityName = flight.arrivalCityName;
      searchResult.departureCity = flight.departureCity;
      searchResult.departureCityName = flight.departureCityName;
      searchResult.fare = flight.fare;
      searchResult.fareCurrency = flight.fareCurrency;
      searchResult.seatsLeft = flight.seatsLeft;

      onwardSearchResults.push(searchResult);
    });

    searchResults['onwardFlightSearchResults'] = onwardSearchResults;

    if (!isOneWay) {
      _.forEach(dto.return, function (flight: any) {
        let searchResult: models.SearchResultModel = new models.SearchResultModel();

        searchResult.operator = flight.operator;
        searchResult.flightNumber = flight.flightNumber;
        searchResult.departureDate = flight.departureDate;
        searchResult.departureTime = flight.departureTime;
        searchResult.duration = flight.duration;
        searchResult.arrivalDate = flight.arrivalDate;
        searchResult.arrivalTime = flight.arrivalTime;
        searchResult.isMealIncluded = flight.isMealIncluded;
        searchResult.arrivalCity = flight.arrivalCity;
        searchResult.arrivalCityName = flight.arrivalCityName;
        searchResult.departureCity = flight.departureCity;
        searchResult.departureCityName = flight.departureCityName;
        searchResult.fare = flight.fare;
        searchResult.fareCurrency = flight.fareCurrency;
        searchResult.seatsLeft = flight.seatsLeft;

        returnSearchResults.push(searchResult);
      });

      searchResults['returnFlightSearchResults'] = returnSearchResults;
    }

    alert(returnSearchResults.length + ' ' + onwardSearchResults.length);

    return searchResults;
  }
}
