import { trigger, transition, style, animate } from '@angular/animations';



export const searchHeaderAnimation = trigger('searchHeaderAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-150%)'

    }),

    animate('2000ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ])
]);