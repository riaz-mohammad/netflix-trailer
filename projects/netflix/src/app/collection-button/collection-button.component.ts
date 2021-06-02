import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-collection-button',
  templateUrl: './collection-button.component.html',
  styleUrls: ['./collection-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
