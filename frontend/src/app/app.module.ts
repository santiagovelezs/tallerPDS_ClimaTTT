import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TriquiComponent } from './components/triqui/triqui.component';
import { ClimaComponent } from './components/clima/clima.component';

@NgModule({
  declarations: [
    AppComponent,
    TriquiComponent,
    ClimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
