import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ShowsPageService } from '../../services/shows-page.service';
import { ShowGenreName } from './../../types/types';

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

  ngOnInit(): void {
    this.showsService.getShows(this.genre).subscribe(console.log);
  }
}
