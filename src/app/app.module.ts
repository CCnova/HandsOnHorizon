import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SurfistComponent } from './surfist/surfist.component';
import { SurfistsListComponent } from './surfist/surfists-list/surfists-list.component';
import { SurfistFormComponent } from './surfist/surfist-form/surfist-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SurfistComponent,
    SurfistsListComponent,
    SurfistFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
