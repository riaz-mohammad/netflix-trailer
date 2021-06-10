import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-first-intro',
  templateUrl: './first-intro.component.html',
  styleUrls: ['./first-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log()
  }

}
