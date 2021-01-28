import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CapitalizeFirstPipe } from './capitalizeFirst/capitalize-first.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowBeComponent } from './show-be/show-be.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeFirstPipe,
    ShowBeComponent
    
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
