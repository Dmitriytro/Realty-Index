import {Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // @HostListener('click') dropdownToggle(eventData: Event){
  //   if(this.elRef.nativeElement.classList.contains('open')){
  //     this.renderer.removeClass(this.elRef.nativeElement,'open');
  //   } else{
  //     this.renderer.addClass(this.elRef.nativeElement,'open');
  //   }
  // }
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen;
  }
}
