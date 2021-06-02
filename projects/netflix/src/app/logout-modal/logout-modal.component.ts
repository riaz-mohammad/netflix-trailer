import { Component,  ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { modalAnimation} from '../animations/modal-animation';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
  animations: [modalAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutModalComponent {
  @Output() public confirmLogout: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  public onConfirmLogOut(value: boolean): void {
    this.confirmLogout.emit(value);
  }
    
}
