import { trigger, transition, style, animate, keyframes } from '@angular/animations';




export const registrationAnimation = trigger('registrationAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100px) scale(0.9)'
    }),

    animate('1000ms', style({
      opacity: 1,
      transform: 'translateY(0) scale(1)'
    }))
      
  ])
     
   
    
]);