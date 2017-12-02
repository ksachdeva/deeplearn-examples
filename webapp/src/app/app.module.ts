import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/modules/shared.module';
import { CoreModule } from './core/core.module';

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
    SharedModule.forRoot(),
    CoreModule,
    routing,
    SamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
