import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HomeShowsService } from './home-shows.service';

@Component({
  selector: 'app-home-shows',
  templateUrl: './home-shows.component.html',
  styleUrls: ['./home-shows.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeShowsComponent implements OnInit {

  constructor(private showsService: HomeShowsService) { }

  ngOnInit(): void {
    console.log('Shows Component...')
  }

}
