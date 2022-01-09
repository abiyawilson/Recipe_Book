import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlertPlaceHolder]'
})
export class AlertPlaceHolderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
