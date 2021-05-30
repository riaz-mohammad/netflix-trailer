
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnSelect]'
})
export class OnSelectDirective {
  private onSelectSelf: boolean = false;
  
  @HostBinding('class.selected')
  
  get select(): boolean {
    return this.onSelectSelf;
    }

  @HostListener('click')
  onClick(): void {
    this.onSelectSelf = !this.onSelectSelf;
    }
  

}
