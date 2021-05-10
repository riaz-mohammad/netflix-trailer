import { VideoDemoService, ShowCaseData } from './../../video-demo.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Demo } from '../../video-demo.service';

@Component({
  selector: 'app-landing-page-video-demo',
  templateUrl: './landing-page-video-demo.component.html',
  styleUrls: ['./landing-page-video-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageVideoDemoComponent implements OnInit {
  @Input() title!: string;

  public showCase!: Observable<ShowCaseData>;
  constructor(private demoVideos: VideoDemoService) { }

  ngOnInit(): void {
      this.showCase = this.demoVideos.demoVideos(this.title);
    this.showCase.subscribe(data => console.table(data));
  }

}
