import { Injectable } from '@angular/core';
import * as models from '../models/models';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class CityAirportsModelMapper {

	public buildCityAirportsList(dto: any): models.CityAirportModel[] {
		let cityAirports: models.CityAirportModel[] = [];
		if (dto.length > 0) {
			_.forEach(dto, (cityAirport) => {
				cityAirports.push(new models.CityAirportModel(cityAirport.cityName, cityAirport.airportCode, cityAirport.airportName, cityAirport.countryName, cityAirport.countryCode, cityAirport.countryCodeNumber));
			});
		} 
		
		return cityAirports;
	}
}