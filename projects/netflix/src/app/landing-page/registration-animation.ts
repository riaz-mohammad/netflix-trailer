import { trigger, transition, style, animate, keyframes } from '@angular/animations';




export const registrationAnimation = trigger('registrationAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(50%)'
    }),

    animate('700ms', style({
      opacity: 1,
      transform: 'translateY(0)'
    }))
      
  ])
     
   
    
]);