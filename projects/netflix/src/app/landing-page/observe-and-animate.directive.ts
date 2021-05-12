import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appObserveAndAnimate]'
})
export class ObserveAndAnimateDirective implements OnInit {
  public animate!: Subject<boolean | void>;
  @HostBinding('@showOrHide')
  showBorder = false;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.animate = new Subject();
    const observation = new IntersectionObserver(([entry], observation) => {
      if (entry.isIntersecting) {
        this.animate.next(true);
        this.showBorder = true;
        return;
      }
      this.showBorder = false;
      
    }, {
      rootMargin: '0px',
      threshold: [0.2]

    });
    observation.observe(this.element.nativeElement)
    
  }
}
