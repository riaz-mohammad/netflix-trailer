
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-main-grid',
  templateUrl: './landing-page-main-grid.component.html',
  styleUrls: ['./landing-page-main-grid.component.scss'],
})
export class LandingPageMainGridComponent implements OnInit {
  public demos = {
    first: 'first',
    second: 'second',
    third: 'third'
  }
  constructor() { }

  ngOnInit(): void {
    console.log();
  }

}
