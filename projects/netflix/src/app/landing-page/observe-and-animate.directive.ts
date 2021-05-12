import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appObserveAndAnimate]'
})
export class ObserveAndAnimateDirective implements OnInit {
  public animate: boolean | undefined;
  

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const observation = new IntersectionObserver(([entry], observation) => {
      if (entry.isIntersecting) {
        this.animate = true;
      }
    }, {
      rootMargin: '0px',
      threshold: [0.3]

    });
    observation.observe(this.element.nativeElement)
    
  }
}
