import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Preview } from '../home/types';

@Injectable({
  providedIn: 'root',
})
export class MoviePreviewService {
  private _preview: Subject<Preview | undefined> = new Subject();
  public preview$ = this._preview.asObservable();
  constructor() { }
  
  public showMovieInfo(preview: Preview): void {
    this._preview.next(preview);
  }

  public closePreview(): void {
    this._preview.next();
  }
}
