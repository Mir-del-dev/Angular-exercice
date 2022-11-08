import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[StudentBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
  }

  @Input('StudentBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseleave(){

    this.setBorder(this.borderColor || '#009688');
  };
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }
  
    private setBorder(color: string){
      let border='solid 4px'+ color;
      this.el.nativeElement.style.border = border;

    }
   

}
