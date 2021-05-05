import { Component, OnInit } from '@angular/core';
import { logoAnimation } from '../logo-animation';

@Component({
  selector: 'app-landing-page-navigation',
  templateUrl: './landing-page-navigation.component.html',
  styleUrls: ['./landing-page-navigation.component.scss'],
  animations: [logoAnimation],
})
export class LandingPageNavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log();
  }
}
