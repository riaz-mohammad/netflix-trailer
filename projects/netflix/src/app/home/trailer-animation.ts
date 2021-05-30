import { trigger, transition, style, animate } from '@angular/animations';


export const trailerAnimation = trigger('trailerAnimation', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
      
    animate('1000ms ease', style({
      transform: 'translateY(0%)'
    }))
      
  ]),
]);

      

  

