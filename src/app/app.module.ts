import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Example1Module } from './extend_component/example1.module';
import { Example2Module } from './abstract_service/example2.module';
import { BaseWithTemplateComponent } from './abstract_service/base-with-template/base-with-template.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Example1Module,
    Example2Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BaseWithTemplateComponent]
})
export class AppModule { }
