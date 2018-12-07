import { Component } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

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

}
