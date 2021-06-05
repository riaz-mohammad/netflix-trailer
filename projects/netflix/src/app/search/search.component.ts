import { Observable, Subject, Subscription } from 'rxjs';
import { MoviesService } from './../services/movies.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Media } from '../types/types';
import { tap } from 'rxjs/operators';
import { resultsTotalAnimation } from '../animations/results-total-animation';
import { buttonAnimation } from '../animations/movie-preview-animation';
import { searchButtonAnimation } from '../animations/search-button-animation';
import { searchHeaderAnimation } from '../animations/search-header.animation';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    resultsTotalAnimation,
    searchButtonAnimation,
    searchHeaderAnimation,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  public media = new Subject<Media[]>();
  public media$ = this.media.asObservable();
  public searchForm!: FormGroup;
  private sub!: Subscription;
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl('', Validators.required),
    });
  }

  public get search(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }

  public onSubmit(input: any): void {
    if (this.searchForm.invalid) {
      input.focusOnInput();
      return;
    }
    this.sub = this.movieService
      .search(this.search.value)
      .subscribe((data: Media[]) => this.media.next(data));
  }

  ngOnDestroy(): void {
    this.sub ? this.sub.unsubscribe : null;
  }
}
