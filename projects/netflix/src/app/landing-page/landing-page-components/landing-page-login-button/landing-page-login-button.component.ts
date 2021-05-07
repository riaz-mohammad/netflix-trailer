import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing-page-login-button',
  templateUrl: './landing-page-login-button.component.html',
  styleUrls: ['./landing-page-login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageLoginButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
