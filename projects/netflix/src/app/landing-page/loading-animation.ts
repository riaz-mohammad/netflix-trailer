import { animate, style, transition } from '@angular/animations';
import { trigger } from '@angular/animations';


export const loadFromRight = trigger('loadFromRight', [
  transition('false => true', [
    style({
      opacity: 0,
      transform: 'translateX(100%)'
    }),
    animate('500ms', style({
      opacity: 0,
      transform: 'translateX(0%)'
    }))
      
  ])
])
export const loadFromLeft = trigger('loadFromLeft', [
  transition('false => true', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
      
    }),
    animate('500ms', style({
      opacity: 1,
      transform: 'translateX(0%)'
      
    }))
  ])
])