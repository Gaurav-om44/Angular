import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

 

import { AppComponent } from './app.component';

import { StateDisplayComponent } from './state-display/state-display.component';

import { StateUpdateComponent } from './state-update/state-update.component';

 

@NgModule({

  declarations: [

    AppComponent,

    StateDisplayComponent,

    StateUpdateComponent

  ],

  imports: [

    BrowserModule,

    FormsModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
