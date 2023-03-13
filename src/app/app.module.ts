import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CngComponent } from './components/cng/cng.component';
import { SecComponent } from './components/sec/sec.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { AnimalComponent } from './components/animal/animal.component';



@NgModule({
  declarations: [
    AppComponent,
    CngComponent,
    SecComponent,
    ZooComponent,
    AnimalComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
