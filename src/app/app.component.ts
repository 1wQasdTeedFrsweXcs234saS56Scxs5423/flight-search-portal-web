import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

export const ROOT_SELECTOR = 'app';

@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.reset.css',
    './app.component.demo.css',
    './app.component.style.css',
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public name = 'Angular Starter';
  public tipe = 'assets/img/tipe.png';
  public twitter = 'https://twitter.com/gdi2290';
  public url = 'https://tipe.io';
  public showDevModule: boolean = environment.showDevModule;

  public isOneWaySearch: boolean = true;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  public searchMode(mode: string) {
    this.isOneWaySearch = mode !== '' && mode === 'oneWay';
  }

}
