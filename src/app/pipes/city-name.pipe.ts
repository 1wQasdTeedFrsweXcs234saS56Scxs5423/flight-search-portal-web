import { Pipe, PipeTransform } from '@angular/core';

import { CityAirportsDomainModel } from '../domain-models/city-airports.domainmodel';

@Pipe({ name: 'resolveCityName' })
export class ResolveCityName implements PipeTransform {
    constructor(public _cityAirportsDomainModel: CityAirportsDomainModel) {}

    transform(airportCode: string) {
    let cityName: string = '';
    this._cityAirportsDomainModel.state.cityAirports.forEach(function(airport) {
        if (airport.airportCode === airportCode) {
            cityName = airport.cityName;
        } 
    });
    return cityName;
  }
}