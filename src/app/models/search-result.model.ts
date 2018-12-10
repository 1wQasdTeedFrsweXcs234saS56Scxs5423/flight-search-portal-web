export class SearchResultModel {
  public operator: string;
  public flightNumber: string;
  public departureDate: string;
  public departureTime: string;
  public duration: string;
  public arrivalDate: string;
  public arrivalTime: string;
  public isMealIncluded: boolean;
  public departureCity: string;
  public departureCityName: string;
  public arrivalCity: string;
  public arrivalCityName: string;
  public fare: number;
  public fareCurrency: string;
  public seatsLeft: number;

  constructor() {
    this.operator = '';
    this.flightNumber = '';
    this.departureDate = '';
    this.departureTime = '';
    this.duration = '';
    this.arrivalDate = '';
    this.arrivalTime = '';
    this.isMealIncluded = false;
    this.departureCity = '';
    this.departureCityName = '';
    this.arrivalCity = '';
    this.arrivalCityName = '';
    this.fare = 0;
    this.fareCurrency = '';
    this.seatsLeft = 0;
  }
}
