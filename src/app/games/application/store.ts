import {BehaviorSubject, Observable} from "rxjs";

export abstract class Store<T> {
  protected readonly state: BehaviorSubject<T>;

  protected constructor(defaultValue: T) {
    this.state = new BehaviorSubject<T>(defaultValue);
  }

  get state$(): Observable<T> {
    return this.state.asObservable();
  }

  protected patchState(newStateValue: Partial<T>): void {
    this.state.next({ ...this.state.getValue(), ...newStateValue });
  }
}
