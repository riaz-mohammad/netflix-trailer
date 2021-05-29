import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnSelect]'
})
export class OnSelectDirective {
  private onSelect!: boolean;
  @HostBinding('class.selected')
  get select(): boolean {
    return this.onSelect;
    }

  @HostListener('click')
  onClick(): void {
    this.onSelect = !this.onSelect;
    }
  constructor() { }

}
