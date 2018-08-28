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
		// These are crappy methods. RxJS is a good tool but I need to crack on it.
		// Once I crack on RxJS Store that I intend to use as Domain model, I shall become a good programmer and retire!
		/*window.addEventListener('getCityAirportList', function (evt: any) {
			alert('it came here');
			this.airports.next(evt.detail);
		});*/
	}

	public addCityAirports(cityAirports: models.CityAirportModel[]): void {
		this.setState({
			...this.state,
			cityAirports: cityAirports
		});
	}
}