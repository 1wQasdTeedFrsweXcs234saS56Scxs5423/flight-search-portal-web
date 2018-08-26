import { Component, Input, OnInit } from '@angular/core';
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export const SEARCH_FLIGHT_SELECTOR = 'search-flight';

@Component({
  selector: SEARCH_FLIGHT_SELECTOR,
  templateUrl: './search-flight.component.html',
  styleUrls: [
    './search-flight.component.css'
  ]})

export class SearchFlightComponent implements OnInit {
  @Input('defaultSelected') public defaultSelected;
  public isOneWaySearch: boolean;
  public faFighterJet: any = faFighterJet;
  public searchFlight: FormGroup = new FormGroup({
    departureCity: new FormControl('', Validators.required),
    arrivalCity: new FormControl('', Validators.required),
    departureDate: new FormControl('', Validators.required),
    returnDate: new FormControl('', Validators.required),
    numberOfPassengers: new FormControl('', Validators.required),
    travelClass: new FormControl('', Validators.required)
  });

  // tslint:disable-next-line
  ngOnInit() {
    // make airports list api call here
    this.isOneWaySearch = this.defaultSelected === 'oneWay';
  }

  public searchMode(mode: string) {
    this.isOneWaySearch = mode !== '' && mode === 'oneWay';
  }
}
