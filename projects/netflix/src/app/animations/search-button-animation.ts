import { trigger, transition, style, animate } from '@angular/animations';



export const searchButtonAnimation = trigger('searchButtonAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(200%)'
    }),

    animate('2000ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ])
]);




