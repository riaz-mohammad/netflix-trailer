import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing-page-form-button',
  templateUrl: './landing-page-form-button.component.html',
  styleUrls: ['./landing-page-form-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageFormButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log()
  }

}
