import { trigger, transition, style, animate, query } from '@angular/animations';

export const moviePreviewAnimation = trigger('moviePreviewAnimation', [
  transition(':enter', [
    query(':self', [
         style({
            opacity: 0,
            transform: 'translateY(-100%)'
          }),

          animate('500ms ease', style({
            opacity: 1,
            transform: 'translateY(0%)'
          })),
        ])
  ]),

  
]);
  
export const moveOutPreview = trigger('moveOutPreview', [
  transition(':leave', [
    animate('500ms ease', style({
      opacity: 0,
      // transform: 'translateY(-100%)'
    }))
  ])
])


