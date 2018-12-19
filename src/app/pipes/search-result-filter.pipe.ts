import { Pipe, PipeTransform } from '@angular/core';

import * as models from '../models/models';

@Pipe({ name: 'searchResultFilter' })
export class SearchResultFilter implements PipeTransform {
    transform(flights: models.SearchResultModel[], maxFlightFare: number):models.SearchResultModel[] {
    let filteredFlights: models.SearchResultModel[];
    filteredFlights = flights.filter(flight => {
      return flight.fare <= maxFlightFare;
    });
    return filteredFlights;
  }
}