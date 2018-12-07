import { Component, Input, OnInit } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

import { CityAirportsDomainModel } from '../domain-models/city-airports.domainmodel';
import { CONFIG } from './search-flight.constant';
import { DataServices } from '../services/data-services/data-services';
import { StaticDataServices } from '../services/data-services/static-services';
import { DateService } from '../services/date-service/date.service';

import * as models from '../models/models';

export const SEARCH_FLIGHT_SELECTOR = 'search-flight';

@Component({
  selector: SEARCH_FLIGHT_SELECTOR,
  templateUrl: './search-flight.component.html',
  styleUrls: [
    './search-flight.component.css'
  ]
})

export class SearchFlightComponent implements OnInit {
  @Input('defaultSelected') public defaultSelected;
  public isOneWaySearch: boolean;
  public config: any = CONFIG;
  public faUtensils: any = faUtensils;
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

  public fromCityAirportsSearchList: models.CityAirportModel[] = [];
  public toCityAirportsSearchList: models.CityAirportModel[] = [];

  public isSelectingFromCity: boolean = false;
  public isSelectingToCity: boolean = false;
 
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
    private _dataServices: DataServices,
    private _staticDataServices: StaticDataServices,
    public cityAirportsStore: CityAirportsDomainModel
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
  }

  public searchMode(mode: string): void {
    this.isOneWaySearch = mode !== '' && mode === 'oneWay';
    if (!!this.isOneWaySearch) {
      this.searchFlight.removeControl('returnDate');
    } else {
      this.searchFlight.addControl('returnDate', new FormControl('', Validators.required));
    }
  }


  public setDepartureDateFlags(): void {
    this.isDepartureDateFocused = true;
    this.isDepartureDateInPresent = false;
    this.isDepartureDateValid = true;
  }

  public setReturnDateFlags(): void {
    this.isArrivalDateFocused = true;
    this.isReturnDateInPresent = false;
    this.isReturnDateValid = true;
  }

  public checkIfDateIsPresentDate(mode: string): void {
    if (mode === 'departure') {
      this.isDepartureDateInPresent = moment(this.searchFlight.controls['departureDate'].value).diff(moment(this.currentDate, 'DD/MM/YYYY')) >= 0;
    } else if (mode === 'arrival') {
      this.isReturnDateInPresent = moment(this.searchFlight.controls['returnDate'].value).diff(moment(this.currentDate, 'DD/MM/YYYY')) >= 0;
    }
  }

  public checkIfDateIsValid(mode: string): void {
    if (mode === 'departure') {
      this.isDepartureDateValid = moment(this.searchFlight.controls['departureDate'].value).isValid();
    } else if (mode === 'arrival') {
      this.isReturnDateValid = moment(this.searchFlight.controls['returnDate'].value).isValid();
    }
  }

  public checkIfReturnDateBeforeDepartureDate(): void {
    if (!this.isOneWaySearch) {
      if (moment(this.searchFlight.controls['returnDate'].value).isValid() && moment(this.searchFlight.controls['departureDate'].value).isValid()) {
        this.isReturnDateBeforeDepartureDate = moment(this.searchFlight.controls['returnDate'].value).diff(this.searchFlight.controls['departureDate'].value) < 0;
      } else {
        this.isReturnDateBeforeDepartureDate = false;
      }
    }
  }

  public searchCity(event: any, mode: string): void {
    if (mode === 'from') {
      if (!this.searchFlight.controls['departureCity'].hasError('pattern') && event.target.value.trim() !== '') {
        this.fromCityAirportsSearchList = this._staticDataServices.getAirportsSearchResult(event.target.value.toLowerCase().trim(), this.searchFlight.controls['arrivalCity'].value) || [];
      }
    } else if (mode === 'to') {
      if (!this.searchFlight.controls['arrivalCity'].hasError('pattern') && event.target.value.trim() !== '') {
        this.toCityAirportsSearchList = this._staticDataServices.getAirportsSearchResult(event.target.value.toLowerCase().trim(), this.searchFlight.controls['departureCity'].value) || [];
      }
    }
  }

  public setAirport (airport: models.CityAirportModel, mode): void {
    if (mode === 'departure') {
      this.searchFlight.controls['departureCity'].setValue(airport.airportCode);
      this.isSelectingFromCity = false;
    } else if (mode === 'arrival') {
      this.searchFlight.controls['arrivalCity'].setValue(airport.airportCode);
      this.isSelectingToCity = false;
    }
  }

  public trackByAirportCode(index, airport): any {
    return airport ? airport.airportCode : undefined;
  }

  public searchFlights(): void {
    this._dataServices.getFlightSearchResults(this.isOneWaySearch, this.searchFlight.controls['departureCity'].value, this.searchFlight.controls['arrivalCity'].value, this.searchFlight.controls['departureDate'].value, !this.isOneWaySearch ? this.searchFlight.controls['returnDate'].value : undefined)
  }
}
