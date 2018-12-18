import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class AppServices {
	public trigger(event: string, data?: any) {
		let evt = new CustomEvent(event, { detail: data });
		document.dispatchEvent(evt);
	}
}