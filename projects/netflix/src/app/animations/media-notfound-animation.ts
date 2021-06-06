import { trigger, transition, style, animate } from '@angular/animations';


export const mediaNotFound = trigger('mediaNotFound', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-100%)'
    }),

    animate('500ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ]),

  transition(':leave', animate('500ms ease', style({
    opacity: 0,
    transform: 'translateY(-100%)'
  })))
]);