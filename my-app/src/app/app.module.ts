import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CapitalizeFirstPipe } from './capitalizeFirst/capitalize-first.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeFirstPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
