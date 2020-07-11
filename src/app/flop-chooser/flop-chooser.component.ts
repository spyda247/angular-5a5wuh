import { Component, Input } from '@angular/core';


@Component({
  selector: 'my-flop-chooser',
  templateUrl: './flop-chooser.component.html',
  styleUrls: [ ]
})
export class FlopChooserComponent  {
  @Input() movie

}