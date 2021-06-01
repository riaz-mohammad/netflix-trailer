import { animate, query, stagger, style, transition, trigger } from "@angular/animations";



export const logoAnimation = trigger('logoAnimation', [
  transition(':enter', [
    query('path', [
      style({
        opacity: 0
      }),
      stagger('200ms', animate('600ms', style({
       opacity: 1
      })))
    ], {optional: true})
    
  ]),
    
]);