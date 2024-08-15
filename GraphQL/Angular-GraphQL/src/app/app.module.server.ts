import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HttpClient } from '@angular/common/http';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ApolloModule
  ],
  bootstrap: [AppComponent],
  providers:[provideHttpClient()]
})
export class AppServerModule {}
