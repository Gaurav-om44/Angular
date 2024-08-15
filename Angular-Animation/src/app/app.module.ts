import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryAnimationComponent } from './entry-animation/entry-animation.component';
import { ExitAnimationComponent } from './exit-animation/exit-animation.component';
import { StateTransitionComponent } from './state-transition/state-transition.component';
import { KeyFrameComponent } from './key-frame/key-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryAnimationComponent,
    ExitAnimationComponent,
    StateTransitionComponent,
    KeyFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
