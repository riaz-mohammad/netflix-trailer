import { trigger, transition, style, animate, keyframes } from '@angular/animations';




export const registrationAnimation = trigger('registrationAnimation', [
  transition(':enter', [
    animate('1000ms', keyframes([
      style({opacity: 0, transform: 'translateY(50%)'}),
      style({opacity: 0.2, transform: 'translateY(40%)'}),
      style({opacity: 0.4, transform: 'translateY(30%)'}),
      style({opacity: 0.6, transform: 'translateY(20%)'}),
      style({opacity: 0.8, transform: 'translateY(10%)'}),
      style({opacity: 1, transform: 'translateY(0%)'}),
    ]))
      
  ])
     
   
    
]);