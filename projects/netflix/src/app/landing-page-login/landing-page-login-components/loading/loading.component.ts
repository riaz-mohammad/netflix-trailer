import { Component, OnInit, ChangeDetectionStrategy, HostBinding, OnDestroy } from '@angular/core';
import { introLoading } from '../../../animations/intro-loading.animation';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [introLoading],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  @HostBinding('@introLoading')
  runAnimation = true;
}
  
  


