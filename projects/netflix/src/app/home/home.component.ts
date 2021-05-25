import { MoviesService } from './movies.service';
import { trigger, transition, query, style, group, animate, state, keyframes } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: []
})
export class HomeComponent implements OnInit {
  public show: boolean | undefined;
  constructor(private movies: MoviesService) { }
  
  ngOnInit(): void {
    console.log();
  }

}
