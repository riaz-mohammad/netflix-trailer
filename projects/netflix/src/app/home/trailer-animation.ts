import { trigger, transition, style, animate } from '@angular/animations';


export const trailerAnimation = trigger('trailerAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100%)'
    }),
    animate('1200ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ]),

]);
  

