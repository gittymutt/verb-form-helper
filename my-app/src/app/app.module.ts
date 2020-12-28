import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CapitalizeFirstPipe } from './capitalizeFirst/capitalize-first.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeFirstPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
