import { Component, OnInit, ChangeDetectionStrategy, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { buttonsAnimation } from './../animations/collection-buttons-animation';

@Component({
  selector: 'app-home-collection-button',
  templateUrl: './home-collection-button.component.html',
  styleUrls: ['./home-collection-button.component.scss'],
  animations: [buttonsAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCollectionButtonComponent {
  public showButtons!: boolean;
  constructor(public router: Router) {}
  
  public toggleButtonsState(): void {
    this.showButtons = !this.showButtons;
  }
  
  @HostListener('mouseleave')
  onMouseleave(): void {
    this.showButtons ? this.toggleButtonsState() : null;
  }
  
  

  public showOrHide(current: string): boolean {
    return this.router.url !== current;
  }
}


  

