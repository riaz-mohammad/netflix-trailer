import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit {
  ngOnInit(): void {
    console.log('Movies Page Initiated...');
  }
}
