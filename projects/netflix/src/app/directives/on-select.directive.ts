
import { Directive, HostBinding, HostListener} from '@angular/core';


@Directive({
  selector: '[appOnSelect]',
  exportAs: 'selection'
})
export class OnSelectDirective {
  private _selfState = false;
  @HostBinding('class.selected')
   get select(): boolean {
    return this._selfState;
    }

  @HostListener('click')
  onClick(): void {
    this.toggleState();
  }

  public toggleState(): void {
    this._selfState = !this._selfState;
  }
}
    
    

    

    
    
     
  
  

