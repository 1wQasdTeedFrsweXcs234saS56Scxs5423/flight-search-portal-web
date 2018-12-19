import { Component, Input, OnInit } from '@angular/core';

import * as fontAwesomeIcons from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'inline-error',
	templateUrl: './inline-error.component.html',
	styleUrls: [
		'./inline-error.component.css'
	]
})

export class InlineErrorComponent implements OnInit {
	@Input('errorMessage') public errorMessage;
	@Input('substituteMessage') public substituteMessage;
	public fontAwesomeIcons: any = fontAwesomeIcons;

	constructor() {}

	ngOnInit() {
		if (!!this.substituteMessage && this.substituteMessage.toString().trim() !== '') {
			this.errorMessage = this.errorMessage.replace('<x>', this.substituteMessage);
		}
	}
}