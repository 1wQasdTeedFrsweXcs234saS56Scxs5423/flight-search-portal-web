import { Component, Input } from '@angular/core';
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';

export const SEARCH_FLIGHT_SELECTOR = 'search-flight';

@Component({
  selector: SEARCH_FLIGHT_SELECTOR,
  templateUrl: './search-flight.component.html',
  styleUrls: [
    './search-flight.component.css'
  ]})

export class SearchFlightComponent {
  @Input('defaultSelected') public defaultSelected;
  public isOneWaySearch: boolean = this.defaultSelected === 'oneWay';
  public faFighterJet: any = faFighterJet;

  public searchMode(mode: string) {
    this.isOneWaySearch = mode !== '' && mode === 'oneWay';
  }
}
