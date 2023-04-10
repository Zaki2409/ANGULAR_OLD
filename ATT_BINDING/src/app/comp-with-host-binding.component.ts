
import { Component , HostBinding } from "@angular/core";

@Component({
    selector: 'comp-with-host-binding',
    template: ' im comp',
})
export class CompWithHostBindingComponent {
    @HostBinding('class.speacial')
    isspecial = false;
    
    @HostBinding('style.color')
  color = 'pink';

  @HostBinding('style.width')
  width = '200px';

}