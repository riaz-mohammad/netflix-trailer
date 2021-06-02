import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { logoAnimation } from '../../animations/logo-animation';

@Component({
  selector: 'app-landing-page-logo',
  templateUrl: './landing-page-logo.component.html',
  styleUrls: ['./landing-page-logo.component.scss'],
  animations: [logoAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageLogoComponent{

  constructor() { }

}
