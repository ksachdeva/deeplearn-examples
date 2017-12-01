import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home';
import { routing } from './app.routing';
import { SamplesModule } from './samples';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
