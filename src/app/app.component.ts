import { Component } from '@angular/core';
import { FlopChooserService } from './flop-chooser.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  flops;
  isCorrect = false;
  hasChosen = false;
  constructor(public flopChooser: FlopChooserService) {

  }

  ngOnInit() {
    this.selectNewFlops();
  }
  selectNewFlops() {
    this.flops = this.flopChooser.getTwoRandomFlops();
  }

  onFirstFlopChosen() {
    if(!this.hasChosen){
      this.hasChosen = true;
      this.isCorrect = this.flopChooser.isCorrect(this.flops.firstFlop, this.flops.secondFlop)
      console.log(this.isCorrect)
    }
    
  }
  onSecondFlopChosen() {
    if(!this.hasChosen){
      this.hasChosen = true;
      this.isCorrect = this.flopChooser.isCorrect(this.flops.secondFlop, this.flops.firstFlop)
      console.log(this.isCorrect)
    }
  }
  onPlayAgainClick() {
    this.hasChosen = false;
    this.selectNewFlops();
    this.isCorrect = false;
  }
}
