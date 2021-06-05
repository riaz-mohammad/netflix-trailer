import { trigger, transition, query, style, animate } from '@angular/animations';


export const bannerAnimation = trigger('bannerAnimation', [
  transition(':enter', [
    query(':self', [
      style({
        transform: 'translateY(-200%)',
        opacity: 0
      })
    ], { optional: true }),
    
    query(':self', [
      animate('1500ms ease', style({
        transform: 'translateY(0%)',
        opacity: 1
      }))
    ], {optional: true})
  ])
]);
  
export const buttonAnimation = trigger('buttonAnimation', [
   transition(':enter', [
        query(':self', [
          style({
            transform: 'translateX(-100%)',
            opacity: 0

          })
        ], { optional: true }),
        
        query(':self', [
          animate('1500ms ease', style({
            
            transform: 'translateX(0%)',
            opacity: 1
          }))
        ], {optional: true})
      ])
])


export const overViewAnimation = trigger('overViewAnimation', [
    transition(':enter', [
      query(':self', [
        style({
          transform: 'translateY(100%)',
          opacity: 0
        })
      ], { optional: true }),
      
      query(':self', [
        animate('1500ms ease', style({
          transform: 'translateY(0%)',
          opacity: 1
        }))
      ], {optional: true})
    ])
]);
