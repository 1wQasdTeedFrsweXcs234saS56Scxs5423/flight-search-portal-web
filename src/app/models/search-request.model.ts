export class SearchRequestModel {
  public tripClass: string;
  public passengers: Passengers;
  public segment: Segment[];

  constructor() {
    this.tripClass = '';
    this.passengers = new Passengers();
    this.segment = [new Segment()];
  }
}

class Passengers {
  public adults?: number;
  public children?: number;
  public infants?: number;

  constructor() {
    this.adults = 0;
    this.children = 0;
    this.infants = 0;
  }
}

class Segment {
  public origin: string;
  public destination: string;
  public date: string;

  constructor() {
    this.origin = '';
    this.destination = '';
    this.date = '';
  }
}
