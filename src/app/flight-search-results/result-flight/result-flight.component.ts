import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ResolveCityName } from '../../pipes/city-name.pipe';

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

  @Input()
  public flightDetails: any;

  @Input()
  public flightType: string;
}
