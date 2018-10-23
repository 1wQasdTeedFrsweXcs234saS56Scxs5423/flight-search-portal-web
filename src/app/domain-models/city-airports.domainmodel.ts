import { Injectable } from '@angular/core';
import { Store } from './store';
import * as models from '../models/models';
import { CityAirportsState } from './city-airports.state';
 
@Injectable({
	providedIn: 'root'
})
export class CityAirportsDomainModel extends Store<CityAirportsState> {
	constructor() {
		super(new CityAirportsState());
	}

	public addCityAirports(cityAirports: models.CityAirportModel[]): void {
		this.setState({
			...this.state,
			cityAirports: cityAirports
		});
	}
}
