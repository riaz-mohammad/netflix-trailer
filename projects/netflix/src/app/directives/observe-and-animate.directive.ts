import { Directive, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';


@Directive({
  selector: '[appObserveAndAnimate]'
})
export class ObserveAndAnimateDirective implements OnInit, OnDestroy {
  @HostBinding('@showOrHide')
    animationEffect = false;
  
  private observation!: IntersectionObserver;
  constructor(private element: ElementRef) {}
  
  ngOnInit(): void {
        this.observation = new IntersectionObserver(([entry], observation) => {
          if (entry.isIntersecting) {
        this.animationEffect = true;
        return;
      }
      this.animationEffect = false;
      
    }, {
      rootMargin: '0px',
      threshold: [0.2]

    });
    this.observation.observe(this.element.nativeElement)
    
  }
  ngOnDestroy(): void {
    this.observation.unobserve(this.element.nativeElement);
  }

}
