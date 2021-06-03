import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ShowsPageService } from '../../services/shows-page.service';
import { Show, ShowGenreName } from './../../types/types';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowComponent implements OnInit {
  @Input() genre!: ShowGenreName;
  constructor(private showsService: ShowsPageService) {}
  public images = this.showsService.images;
  public shows!: Observable<Show[]>;
  ngOnInit(): void {
    this.shows = this.showsService.getShows(this.genre);
  }
    

  public getShowInfo(show: Show): void {
    console.log({Show: show});
  }
}
