import { trigger, transition, style, animate } from '@angular/animations';


export const resultsTotalAnimation = trigger('resultsTotalAnimation', [
  transition(':enter', [
    style({
      opacity: 1,
      transform: 'translateY(-100%)'
    }),

    animate('700ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    })),
  ])
]);