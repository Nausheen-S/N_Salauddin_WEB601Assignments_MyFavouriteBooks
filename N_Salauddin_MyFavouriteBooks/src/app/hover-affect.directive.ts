import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})

export class HoverAffectDirective {
  @Input() hoverStyle!: string;

  @HostBinding('style.text-decoration') textDecoration!: string;
  @HostBinding('style.font-weight') fontWeight!: string; //non-null assertion operator => initialized later

  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyle();
  }

  applyStyle() {
    if (this.hoverStyle === 'underline') {
      this.textDecoration = 'underline';
    } else if (this.hoverStyle === 'bold') {
      this.fontWeight = 'bold';

    }
  }

  removeStyle() {
    this.textDecoration = null!; //TypeScript cannot determine that null is a valid value for a string or number, so force cast it
    this.fontWeight = null!;
  }

    
}
