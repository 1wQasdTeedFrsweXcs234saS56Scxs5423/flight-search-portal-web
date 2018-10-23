export class SearchResultModel {
  public operator: string;
  public flightNumber: string;
  public departureDate: string;
  public departureTime: string;
  public duration: string;
  public isMealIncluded: boolean;
  public departureCity: string;
  public arrivalCity: string;
  public fare: number;
  public fareCurrency: string;
  public seatsLeft: number;

  constructor() {
    this.operator = '';
    this.flightNumber = '';
    this.departureDate = '';
    this.departureTime = '';
    this.duration = '';
    this.isMealIncluded = false;
    this.departureCity = '';
    this.arrivalCity = '';
    this.fare = 0;
    this.fareCurrency = '';
    this.seatsLeft = 0;
  }
}
