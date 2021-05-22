

import { Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import { Observable } from 'rxjs';


import { VideoDemoService, ShowCaseData } from './../../video-demo.service';



@Component({
  selector: 'app-landing-page-video-demo',
  templateUrl: './landing-page-video-demo.component.html',
  styleUrls: ['./landing-page-video-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageVideoDemoComponent implements OnInit {
  @Input() public title!: string;
  
  public loadAnimation!: boolean;

  public showCase!: Observable<ShowCaseData>;
  constructor(private demoVideos: VideoDemoService) { }

  ngOnInit(): void {
    this.showCase = this.demoVideos.demoVideos(this.title);
  }
      
      
    
    
}
