import { animate, state, style, transition } from '@angular/animations';
import { trigger } from '@angular/animations';


export const showOrHide = trigger('showOrHide', [
  
  state('false', style({
    opacity: 0,
    transform: 'scale(0.9)'
  })),

  state('true', style({
    opacity: 1,
    transform: 'scale(1)'
  })),

  transition('false <=> true', animate('700ms'))
])
  

  