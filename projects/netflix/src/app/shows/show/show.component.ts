import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowsPageService } from '../../services/shows-page.service';
import { Show, ShowGenreName } from './../../types/types';
import { MoviePreviewService } from './../../services/movie-preview.service';
import { imageFadeIn } from '../../animations/images-animation';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  animations: [imageFadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowComponent implements OnInit {
  @Input() genre!: ShowGenreName;
  constructor(private showsService: ShowsPageService,
              private infoPreview: MoviePreviewService) { }
  public images = this.showsService.images;
  public shows!: Observable<Show[]>;
  ngOnInit(): void {
    this.shows = this.showsService.getShows(this.genre);
  }
    

  public getShowInfo(show: Show): void {
    this.infoPreview.showMovieInfo(show);
  }
    
}
