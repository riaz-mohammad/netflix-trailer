import { trigger, transition, query, style, animate, group, animateChild } from '@angular/animations';


export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', animateChild(), { optional: true }),

    group([
      query('@registrationAnimation', animateChild(), { optional: true }),
      query('@logoAnimation', animateChild(), { optional: true }),
      query('@loginButtonAnimation', animateChild(), { optional: true }),
      query('@imageFadeIn', animateChild(), { optional: true }),
      query('@searchButtonAnimation', animateChild(), { optional: true }),
      query('@searchHeaderAnimation', animateChild(), { optional: true }),
      query('@bannerAnimation', animateChild(), { optional: true }),
      query('@buttonAnimation', animateChild(), { optional: true }),

      query(
        ':enter',
        [
          animate(
            '3000ms ease',
            style({
              opacity: 1,
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          animate(
            '2000ms ease',
            style({
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
    ]),

    query(':leave', animateChild(), { optional: true }),
  ]),
]);