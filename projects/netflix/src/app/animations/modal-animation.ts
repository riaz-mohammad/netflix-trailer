import { trigger, transition, style, animate, query } from '@angular/animations';

export const modalAnimation = trigger('modalAnimation', [
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

]);

export const modalFadeIn = trigger('modalFadeIn', [
  transition(':leave', [
    query(':self', [
      animate('500ms ease', style({
        opacity: 0
      }))
    ])
  ])
  
]);