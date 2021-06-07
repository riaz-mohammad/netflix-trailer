import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Demo {
  constructor(public id: string,
              public title: string,
              public description: string,
              public path: string) { }
}


export interface ShowCaseData {
  id: string;
  title: string;
  description: string;
  path: string;
}


@Injectable({
  providedIn: 'root',
})
export class VideoDemoService {
  private demos: Demo[] = [
    new Demo(
      'first',
      'Enjoy on your TV.',
      'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      // '../../assets/first-demo-video.mp4'
      '../../assets/demo-movie-1.gif'
    ),

    new Demo(
      'second',
      'Download and watch offline.',
      'Save your favorites easily and always have something to watch.',
      // '../../assets/second-demo-video.mp4'
      '../../assets/demo-movie-2.gif'
    ),

    new Demo(
      'third',
      'Watch everywhere.',
      'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
      // '../../assets/third-demo-video.mp4'
      '../../assets/demo-movie-3.gif'
    ),
  ];

  public demoVideos(title: string): Observable<ShowCaseData> {
    const target = this.demos.find(data => data.id === title) as ShowCaseData;
    return of(target);
  }
}
