import { trigger, transition, style, animate } from '@angular/animations';

export const errorAnimation = trigger('errorAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-100%)',
    }),

    animate(
      '300ms',
      style({
        opacity: 1,
        transform: 'translateY(15%) translateY(0%)',
      })
    ),
  ]),

  transition(':leave', [
      animate(
      '300ms',
        style({
        opacity: 0,
        transform: 'translateY(-100%)',
      })
    ),
  ]),
]);