import { HostListener } from '@angular/core';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';

export class CityAirportsDomainModel {
	public appConfig: any = APP_CONFIG;
	public airports: Observable<any>;

	constructor() {
		window.addEventListener('getCityAirportList', function (evt: any) {
			alert('it came here');
			this.airports.next(evt.detail);
		});
	}	

	@HostListener('window:getCityAirportList', ['$event']) saveAccountDetails(evt) {
		alert('Event came here');
	}
}