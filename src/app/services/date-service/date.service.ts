import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class DateService {
	
	public getCurrentDate() {
		return moment().format('DD/MM/YYYY');
	}
}