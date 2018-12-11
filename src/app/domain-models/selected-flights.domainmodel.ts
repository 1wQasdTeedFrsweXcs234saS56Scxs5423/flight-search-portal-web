import { Injectable } from '@angular/core';
import { Store } from './store';
import * as models from '../models/models';
import { SelectedFlightsState } from './selected-flights.state';

@Injectable({
  providedIn: 'root'
})
export class SelectedFlightsDomainModel extends Store<SelectedFlightsState> {
  constructor() {
    super(new SelectedFlightsState());
  }

  public setSelectedFlight(selectedFlight: models.SearchResultModel, journeyType: string): void {
    if (journeyType === 'onwards') {
        this.setState({
            ...this.state,
            onwardsFlight: selectedFlight
        });
    } else if (journeyType === 'return') {
        this.setState({
            ...this.state,
            returnFlight: selectedFlight
        });
    }
  }
}
