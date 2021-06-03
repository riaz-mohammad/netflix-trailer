import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowsComponent implements OnInit {
  ngOnInit(): void {
    console.log('Shows Page Initiated...')
  }

}
