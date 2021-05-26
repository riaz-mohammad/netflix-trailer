import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { VideoIdService } from './video-id.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(public videoIdService: VideoIdService) { }
  
  ngOnInit(): void {
    console.log();
  }

  public onClosePlayer(): void {
    this.videoIdService.removeVideoId();
  }
  

}
