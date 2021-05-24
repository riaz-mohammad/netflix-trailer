import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { MOVIES, MoviesService } from './../movies.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeaderComponent implements OnInit {
 
  constructor(public movieService: MoviesService) { }
  public imageUrl!: string;
  public data!: Array<any>;
  ngOnInit(): void {
    console.log('Initiated...')
   
  }
    
    
}
    
      

      
