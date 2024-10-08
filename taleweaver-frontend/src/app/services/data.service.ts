import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  private filter = new BehaviorSubject<string>('');
  private bookContentSubject = new BehaviorSubject<string>('');
  private access = new BehaviorSubject<string>('');

  bookContent$ = this.bookContentSubject.asObservable();
  filter$ = this.filter.asObservable();
  access$ = this.access.asObservable();

  updateBookContent(newData: string) {
    this.bookContentSubject.next(newData);
  }

  updateFilter(newFilter: string) {
    this.filter.next(newFilter);
  }

  updateAccess(newAccess: string) {
    this.access.next(newAccess);
  }
}
