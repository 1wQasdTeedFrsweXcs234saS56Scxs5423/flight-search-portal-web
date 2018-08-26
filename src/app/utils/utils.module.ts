import { NgModule } from '@angular/core';
import { InlineErrorComponent } from './inline-error/inline-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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