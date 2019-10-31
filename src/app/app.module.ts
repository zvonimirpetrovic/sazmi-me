import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputUserDataComponent } from './input-user-data/input-user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
