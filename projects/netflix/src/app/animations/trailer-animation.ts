import { trigger, transition, style, animate, query } from '@angular/animations';


export const trailerAnimation = trigger('trailerAnimation', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
      
    animate('1000ms ease', style({
      transform: 'translateY(0%)'
    }))
      
  ]),
]);

      
export const fadeIn = trigger('fadeIn', [
  transition(':leave', [
    style({
      opacity: 1
    }),

    query(':self', [
      animate('800ms ease', style({
        opacity: 0
      }))
    ], {optional: true})
  ])
])
  

