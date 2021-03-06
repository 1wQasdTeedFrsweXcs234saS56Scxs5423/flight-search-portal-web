import { Component, ViewEncapsulation } from '@angular/core';

import { environment } from 'environments/environment';

export const ROOT_SELECTOR = 'app';

@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.reset.css',
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  public showDevModule: boolean = environment.showDevModule;
  public isOneWaySearch: boolean = true;
  public defaultSearchFlightMode: string = 'oneWay';

  public searchMode(mode: string) {
    this.isOneWaySearch = mode !== '' && mode === 'oneWay';
  }

}
