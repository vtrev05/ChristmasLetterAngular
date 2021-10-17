import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { FirstSonComponent } from './father/first-son/first-son.component';
import { SecondSonComponent } from './father/second-son/second-son.component';
import { ThirdSonComponent } from './father/third-son/third-son.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    FirstSonComponent,
    SecondSonComponent,
    ThirdSonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
