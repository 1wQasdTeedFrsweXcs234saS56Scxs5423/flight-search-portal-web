export class CityAirportModel {
	public cityName?: string;
	public airportCode?: string;
	public airportName?: string;
	public countryName?: string;
	public countryCode?: string;
	public countryCodeNumber?: string;
	
	constructor(cityName, airportCode, airportName, countryName, countryCode, countryCodeNumber) {
		this.cityName = cityName;
		this.airportCode = airportCode;
		this.airportName = airportName;
		this.countryName = countryName;
		this.countryCode = countryCode;
		this.countryCodeNumber = countryCodeNumber;
	}
}