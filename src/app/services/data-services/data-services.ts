import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../app.config';
import { CityAirportsModelMapper } from '../../model-mappers/city-airport.modelmapper';
import { CityAirportsDomainModel } from '../../domain-models/city-airports.domainmodel';
import { FlightSearchResultsModelmapper } from '../../model-mappers/flight-search-results.modelmapper';
import { SearchResultsDomainModel } from '../../domain-models/search-results.domainmodel';

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
    public _searchResultsDomainModel: SearchResultsDomainModel
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
				this._searchResultsDomainModel.setOneWaySearch(isOneWay);
				this._searchResultsDomainModel.setOnwardFlightSearchResults(searchResults.onwardFlightSearchResults);

        if (!isOneWay) {
					this._searchResultsDomainModel.setReturnFlightSearchResults(searchResults.returnFlightSearchResults);
        }

				let event = new CustomEvent('flightResultsLoaded');
				document.dispatchEvent(event);
      },
      (error: any) => {
        // Show full page error if you are unable to load the search results
      }
    )
  }
}
