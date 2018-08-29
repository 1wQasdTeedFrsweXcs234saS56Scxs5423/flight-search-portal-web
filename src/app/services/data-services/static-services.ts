import { Injectable } from '@angular/core';
import { CityAirportsDomainModel } from '../../domain-models/city-airports.domainmodel';
import * as models from '../../models/models';

@Injectable({
	providedIn: 'root'
})
export class StaticDataServices {
	constructor(private _cityAirporsDomainModel: CityAirportsDomainModel) {}

	public getAirportsSearchResult(searchKey: string): models.CityAirportModel[] {
		alert(this._cityAirporsDomainModel.state$);
		return [];
	}
}