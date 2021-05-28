import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Preview } from './types';

@Injectable({
  providedIn: 'root',
})
export class MoviePreviewService {
  private _preview: Subject<Preview> = new Subject();
  public preview$ = this._preview.asObservable();
  constructor() {}
}
