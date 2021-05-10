import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing-page-video-demo',
  templateUrl: './landing-page-video-demo.component.html',
  styleUrls: ['./landing-page-video-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageVideoDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

}
