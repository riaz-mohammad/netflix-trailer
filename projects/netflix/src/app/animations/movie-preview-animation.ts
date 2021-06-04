import { trigger, transition, style, animate, query, animateChild } from '@angular/animations';

export const moviePreviewAnimation = trigger('moviePreviewAnimation', [
  transition(':enter', [
    query(':self', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)',
      }),

      animate(
        '600ms ease',
        style({
          opacity: 1,
          transform: 'translateY(0%)',
        })
      ),
      query('@titleAnimation', animateChild(), { optional: true }),
      query('@buttonAnimation', animateChild(), { optional: true }),
    ]),
  ]),
]);
  
export const moveOutPreview = trigger('moveOutPreview', [
  transition(':leave', [
    query(
      ':self',
      [
        animate(
          '1000ms ease',
          style({
            opacity: 0
          })
        ),
      ],
      { optional: true }
    ),
  ]),
]);


export const titleAnimation = trigger('titleAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),

    animate('800ms ease', style({
      opacity: 1,
      transform: 'translateX(0%)'
    }))
    
  ])
]);


export const buttonAnimation = trigger('buttonAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100%)',
    }),

    animate(
      '800ms ease',
      style({
        opacity: 1,
        transform: 'translateY(0%)',
      })
    ),
  ]),
]);