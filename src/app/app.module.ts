import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TetrisContainerComponent } from './tetris-container/tetris-container.component';
import { UpperContainerComponent } from './upper-container/upper-container.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TetrisContainerComponent, UpperContainerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
