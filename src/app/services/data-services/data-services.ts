import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../app.config';
import { AppServices } from '../../services/app/app.services';
import { CityAirportsModelMapper } from '../../model-mappers/city-airport.modelmapper';


@Injectable({
	providedIn: 'root'
})
export class DataServices {
	private appConfig: any = APP_CONFIG;
	constructor(
		private _http: HttpClient,
		private _cityAirportsModelMapper: CityAirportsModelMapper,
		private _appServices: AppServices
		) {}

	public getCityAirportsList() {
		this._http.get(this.appConfig.apis.getCityAirportListUrl).subscribe(
				(data: any) => {
					this._appServices.trigger(this.appConfig.events.GET_CITY_AIRPORT_LIST, data);
				}, 
				(error: any) => {
					
				}
			);
	}
}