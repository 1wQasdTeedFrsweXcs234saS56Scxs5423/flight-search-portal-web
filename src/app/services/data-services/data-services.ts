import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../app.config';
import { CityAirportsModelMapper } from '../../model-mappers/city-airport.modelmapper';
import { CityAirportsDomainModel } from '../../domain-models/city-airports.domainmodel';


@Injectable({
	providedIn: 'root'
})
export class DataServices {
	private appConfig: any = APP_CONFIG;
	constructor(
		private _http: HttpClient,
		public _cityAirportsModelMapper: CityAirportsModelMapper,
		public _cityAirportsDomainModel: CityAirportsDomainModel
		) {}

	public getCityAirportsList() {
		this._http.get(this.appConfig.apis.getCityAirportListUrl).subscribe(
				(data: any) => {
					let cityAirportList = this._cityAirportsModelMapper.buildCityAirportsList(data);
					this._cityAirportsDomainModel.addCityAirports(cityAirportList);
				}, 
				(error: any) => {
					// Show full page error if you are unable to load airports	
				}
			);
	}
}