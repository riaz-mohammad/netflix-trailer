import { trigger, transition, style, animate } from '@angular/animations';


export const errorMessageAnimation = trigger('errorMessageAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(90%)'
    }),

    animate('300ms', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ]),

  transition(':leave', [
    animate('300ms', style({
      opacity: 0,
      transform: 'translate(80%)'
    }))
  ])
])