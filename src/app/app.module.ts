import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlopChooserComponent } from './flop-chooser/flop-chooser.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FlopChooserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
