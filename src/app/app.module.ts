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
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { FlightSearchResultsComponent } from './flight-search-results';
import { ResultFlightComponent } from './flight-search-results/result-flight';
import { SearchResultFilterComponent } from './search-result-filter/search-result-filter.component'
import { ResolveCityName } from './pipes/city-name.pipe';
import { SearchResultFilter } from './pipes/search-result-filter.pipe';
import { XLargeDirective } from './home/x-large';
import { DevModuleModule } from './+dev-module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    SearchFlightComponent,
    AboutComponent,
    NoContentComponent,
    FlightSearchResultsComponent,
    ResultFlightComponent,
    SearchResultFilterComponent,
    ResolveCityName,
    SearchResultFilter,
    XLargeDirective
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
    }),

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [ DevModuleModule ] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {}
