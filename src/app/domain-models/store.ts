import { BehaviorSubject, Observable } from 'rxjs';

export class Store<T> {
	private _state$: BehaviorSubject<T>;

	constructor(initialState: T) {
		this._state$ = new BehaviorSubject(initialState);
	}

	get state$(): Observable<T> {
		return this._state$.asObservable();
	}

	get state(): T {
		return this._state$.getValue();
	}

	setState(nextState: T) {
		this._state$.next(nextState);
	}
}