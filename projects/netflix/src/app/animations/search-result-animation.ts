import { trigger, transition, style, query, stagger, animate } from '@angular/animations';


export const searchResultAnimation = trigger('searchResultAnimation', [
  transition(':enter', [
    query(
      ':self',
      [
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
      ],
      { optional: true }
    ),

    query(
      ':self',
      [
        animate(
          '500ms ease',
          style({
            opacity: 1,
            transform: 'translateX(0%)',
          })
        ),
      ],
      { optional: true }
    ),

    transition(':leave', [
      query(
        ':self',
        [
          style({
            opacity: 1,
          }),
        ],
        { optional: true }
      ),

      query(
        ':self',
        [
          animate(
            '500ms ease',
            style({
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]); 