import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxDhis2MenuModule } from '@hisptz/ngx-dhis2-menu';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxDhis2MenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
