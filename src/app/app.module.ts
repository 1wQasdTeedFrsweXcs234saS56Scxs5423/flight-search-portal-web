import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';

/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { NoContentComponent } from './no-content';
import { FlightSearchResultsComponent } from './flight-search-results';
import { ResultFlightComponent } from './flight-search-results/result-flight';
import { SearchResultFilterComponent } from './search-result-filter/search-result-filter.component'
import { ResolveCityName } from './pipes/city-name.pipe';
import { SearchResultFilter } from './pipes/search-result-filter.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    SearchFlightComponent,
    NoContentComponent,
    FlightSearchResultsComponent,
    ResultFlightComponent,
    SearchResultFilterComponent,
    ResolveCityName,
    SearchResultFilter
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    UtilsModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS
  ]
})
export class AppModule {}
