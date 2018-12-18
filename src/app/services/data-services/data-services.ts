import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../app.config';
import { CityAirportsModelMapper } from '../../model-mappers/city-airport.modelmapper';
import { CityAirportsDomainModel } from '../../domain-models/city-airports.domainmodel';
import { FlightSearchResultsModelmapper } from '../../model-mappers/flight-search-results.modelmapper';
import { SearchResultsDomainModel } from '../../domain-models/search-results.domainmodel';
import { AppServices } from '../../services/app/app.services';

@Injectable({
	providedIn: 'root'
})
export class DataServices {
	private appConfig: any = APP_CONFIG;
	constructor(
		private _http: HttpClient,
		public _cityAirportsModelMapper: CityAirportsModelMapper,
		public _cityAirportsDomainModel: CityAirportsDomainModel,
    public _flightSearchResultsModelMapper: FlightSearchResultsModelmapper,
    public _searchResultsStore: SearchResultsDomainModel,
		public _appServices: AppServices
		) {}

	public getCityAirportsList(): void {
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

	public getFlightSearchResults(isOneWay: boolean, departureCity: string, arrivalCity: string, departureDate: string, arrivalDate: string): void {
	  /* The oneway or return can be better handled from API using query parameter or body data but since this mock, I'm using a hardcoded data here */
    let apiToCall: string = isOneWay ? this.appConfig.apis.getFlightSearchResultOneWay : this.appConfig.apis.getFlightSearchResultReturn;
    this._http.get(apiToCall).subscribe(
      (data: any) => {
        let searchResults: any = this._flightSearchResultsModelMapper.buildFlightSearchResults(isOneWay, data);
				this._searchResultsStore.setHasSearched(true);
				this._searchResultsStore.setOneWaySearch(isOneWay);
				this._searchResultsStore.setOnwardFlightSearchResults(searchResults.onwardFlightSearchResults);
				this._searchResultsStore.setDepartureCity(departureCity);
				this._searchResultsStore.setArrivalCity(arrivalCity);

        if (!isOneWay) {
					this._searchResultsStore.setReturnFlightSearchResults(searchResults.returnFlightSearchResults);
        }

				this._appServices.trigger('flightResultsLoaded');
      },
      (error: any) => {
        // Show full page error if you are unable to load the search results
      }
    )
  }
}
