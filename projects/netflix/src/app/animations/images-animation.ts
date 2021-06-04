import { stagger, animate, query } from '@angular/animations';
import { trigger, transition, style } from '@angular/animations';

export const imageFadeIn = trigger('imageFadeIn', [
  transition(':enter', [
    style({
      transform: 'scale(.8)'
    }),

    animate('1200ms ease', style({
      transform: 'scale(1)'
    }))
  ]) 
])