import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Example1Module } from './extend_component/example1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Example1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
