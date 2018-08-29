import { Injectable } from '@angular/core';
import { CityAirportsDomainModel } from '../../domain-models/city-airports.domainmodel';
import * as models from '../../models/models';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class StaticDataServices {
	constructor(private _cityAirporsDomainModel: CityAirportsDomainModel) {}

	public getAirportsSearchResult(searchKey: string, filterAirport: string): models.CityAirportModel[] {
		let airports = this._cityAirporsDomainModel.state.cityAirports;

		// filter the entered destination by the user
		if (filterAirport !== '') {
			airports = _.reject(airports, (airport) => {
				return airport.airportCode.toLowerCase() === filterAirport.toLowerCase();
			});
		}

		return _.filter(airports, (airport) => {
			return airport.airportCode.toLowerCase().includes(searchKey) || 
				   airport.airportName.toLowerCase().includes(searchKey) ||
				   airport.cityName.toLowerCase().includes(searchKey);
		}) || [];
	}
}