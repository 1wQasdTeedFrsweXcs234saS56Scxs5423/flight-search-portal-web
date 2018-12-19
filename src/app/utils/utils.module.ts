import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InlineErrorComponent } from './inline-error/inline-error.component';

@NgModule({
	imports: [
		FontAwesomeModule
	],
	declarations:[
		InlineErrorComponent
	],
	exports: [
		InlineErrorComponent
	]
})

export class UtilsModule {}