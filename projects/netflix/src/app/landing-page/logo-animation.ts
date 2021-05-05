import { animate, query, stagger, style, transition, trigger } from "@angular/animations";



export const logoAnimation = trigger('logoAnimation', [
  transition(':enter', [
    query('path', [
      style({
        transform: 'translateY(-100%)'
      }),
      stagger('200ms', animate('500ms', style({
        transform: 'translateY(0)'
      })))
    ], {optional: true})
    
  ]),
    
]);