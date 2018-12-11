import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ResolveCityName } from '../../pipes/city-name.pipe';
import * as models from '../../models/models';
import { SelectedFlightsDomainModel } from '../../domain-models/selected-flights.domainmodel';

export const RESULT_FLIGHT_SELECTOR = 'result-flight';

@Component({
  selector: RESULT_FLIGHT_SELECTOR,
  templateUrl: './result-flight.component.html',
  styleUrls: [
    './result-flight.component.css'
  ]
})
export class ResultFlightComponent {
  public faUtensils: any = faUtensils;
  public selectedFlightValue: string = '';

  constructor(public _selectedFlightsStore: SelectedFlightsDomainModel) {}

  @Input()
  public flightType: string;

  @Input()
  public searchFlight: FormGroup;

  @Input()
  public flightResults: models.SearchResultModel[];

  public selectFlight(flightDetails: any, flightType: string) {
    this.selectedFlightValue = flightDetails.flightNumber;
    this.searchFlight.controls[flightType].setValue(flightDetails.flightNumber);
    this._selectedFlightsStore.setSelectedFlight(flightDetails, flightType);
  }
}
