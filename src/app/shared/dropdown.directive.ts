import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdownDirective]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

   /* @HostListener('click') toggleOpen () {
        this.isOpen = !this.isOpen;
    } */

    constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
        this.isOpen = this.elementRef.nativeElement.contains(eventData.target) ? !this.isOpen : false;
      }
}