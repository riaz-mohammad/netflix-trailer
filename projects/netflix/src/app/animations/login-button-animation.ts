import { trigger, transition, style, animate } from '@angular/animations';

export const loginButtonAnimation = trigger('loginButtonAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(200%)'
    }),
    
    animate('2500ms ease', 
      style({
        opacity: 1,
        transform: 'translateY(0%)'
      })
    )
  ])
])