import { trigger, transition, animate, style } from '@angular/animations';

export const buttonsAnimation = trigger('buttonsAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-100%)',
    }),

    animate(
      '300ms ease',
      style({
        opacity: 1,
        transform: 'translateY(0%)',
      })
    ),
  ]),

  transition(':leave', [
    animate(
      '300ms ease',
      style({
        opacity: 0,
        transform: 'translateY(-100%)',
      })
    ),
  ]),
]);