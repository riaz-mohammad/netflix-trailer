import { trigger, transition, style, animate } from '@angular/animations';


export const invalidEmail = trigger('invalidEmail', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-50%)'
    }),

    animate('400ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ]),

  transition(':leave', [
    animate('400ms ease', style({
      opacity: 0,
      transform: 'translateY(-50%)'
    }))
  ])
]);