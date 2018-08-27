import { Component, Input, OnInit } from '@angular/core';
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

import { CityAirportsDomainModel } from '../domain-models/city-airports.domainmodel';
import { CONFIG } from './search-flight.constant';
import { DataServices } from '../services/data-services/data-services';
import { DateService } from '../services/date-service/date.service';

export const SEARCH_FLIGHT_SELECTOR = 'search-flight';

@Component({
  selector: SEARCH_FLIGHT_SELECTOR,
  templateUrl: './search-flight.component.html',
  styleUrls: [
    './search-flight.component.css'
  ],
  providers: [CityAirportsDomainModel]
})

export class SearchFlightComponent implements OnInit {
  @Input('defaultSelected') public defaultSelected;
  public isOneWaySearch: boolean;
  public config: any = CONFIG;
  public faFighterJet: any = faFighterJet;
  public isDepartureCityFocused: boolean = false;
  public isArrivalCityFocused: boolean = false;
  public isDepartureDateFocused: boolean = false;
  public isArrivalDateFocused: boolean = false;
  public citySearchNamePattern: string = "^[a-zA-Z0-9]{1,100}$";
  public currentDate: any;
  public isDepartureDateInPresent: boolean = false;
  public isDepartureDateValid: boolean = true;
  public isReturnDateInPresent: boolean = false;
  public isReturnDateValid: boolean = true;
  public isReturnDateBeforeDepartureDate: boolean = false;
  public cADM: CityAirportsDomainModel = new CityAirportsDomainModel();
  public searchFlight: FormGroup = new FormGroup({
    departureCity: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(this.citySearchNamePattern)]),
    arrivalCity: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(this.citySearchNamePattern)]),
    departureDate: new FormControl('', Validators.required),
    returnDate: new FormControl('', Validators.required),
    numberOfPassengers: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    travelClass: new FormControl('economy', Validators.required)
  });

  constructor(
    private _dateService: DateService,
    private _dataServices: DataServices
    ) {}

  // tslint:disable-next-line
  ngOnInit() {
    // make airports list api call here
    this.isOneWaySearch = this.defaultSelected === 'oneWay';
    this.currentDate = this._dateService.getCurrentDate();

    if (!!this.isOneWaySearch) {
      this.searchFlight.removeControl('returnDate');
    }

    this._dataServices.getCityAirportsList();

    this.cADM.airports.subscribe((evt: any) => {
      alert('changed');
    })
  }

  public searchMode(mode: string) {
    this.isOneWaySearch = mode !== '' && mode === 'oneWay';
    if (!!this.isOneWaySearch) {
      this.searchFlight.removeControl('returnDate');
    } else {
      this.searchFlight.addControl('returnDate', new FormControl('', Validators.required));
    }
  }


  public setDepartureDateFlags() {
    this.isDepartureDateFocused = true;
    this.isDepartureDateInPresent = false;
    this.isDepartureDateValid = true;
  }

  public setReturnDateFlags() {
    this.isArrivalDateFocused = true;
    this.isReturnDateInPresent = false;
    this.isReturnDateValid = true;
  }

  public checkIfDateIsPresentDate(mode: string) {
    if (mode === 'departure') {
      this.isDepartureDateInPresent = moment(this.searchFlight.controls['departureDate'].value).diff(moment(this.currentDate, 'DD/MM/YYYY')) >= 0;
    } else if (mode === 'arrival') {
      this.isReturnDateInPresent = moment(this.searchFlight.controls['returnDate'].value).diff(moment(this.currentDate, 'DD/MM/YYYY')) >= 0;
    }
  }

  public checkIfDateIsValid(mode: string) {
    if (mode === 'departure') {
      this.isDepartureDateValid = moment(this.searchFlight.controls['departureDate'].value).isValid();
    } else if (mode === 'arrival') {
      this.isReturnDateValid = moment(this.searchFlight.controls['returnDate'].value).isValid();
    }
  }

  public checkIfReturnDateBeforeDepartureDate() {
    if (moment(this.searchFlight.controls['returnDate'].value).isValid() && moment(this.searchFlight.controls['departureDate'].value).isValid()) {
      this.isReturnDateBeforeDepartureDate = moment(this.searchFlight.controls['returnDate'].value).diff(this.searchFlight.controls['departureDate'].value) < 0;
    } else {
      this.isReturnDateBeforeDepartureDate = false;
    }
  }
}
