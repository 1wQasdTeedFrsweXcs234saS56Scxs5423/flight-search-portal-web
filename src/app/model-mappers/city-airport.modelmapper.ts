import { Injectable } from '@angular/core';
import * as models from '../models/models';
import * as _ from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class CityAirportsModelMapper {
	public buildCityAirportsList(dto: any): models.CityAirportModel[] {

		return [];
	}
}