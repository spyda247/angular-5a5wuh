import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'my-flop-chooser',
  templateUrl: './flop-chooser.component.html',
  styleUrls: [ ]
})
export class FlopChooserComponent  {
  @Input() movie
  @Output() choose = new EventEmitter();

  onClick() {
    this.choose.emit()
  }

}