import { UrlAddressService } from './../../services/url-address.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MoviePreviewService } from '../../services/movie-preview.service';
import { Media } from '../../types/types';
import { searchResultAnimation } from '../../animations/search-result-animation';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  animations: [searchResultAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent  {
  @Input() media!: Observable<Media[]>;

  constructor(
    private moviePreview: MoviePreviewService,
    private connection: UrlAddressService
  ) {}

  public images = this.connection.IMAGES;
  public getMovieInfo(media: Media): void {
    this.moviePreview.showMovieInfo(media);
  }

}
  
