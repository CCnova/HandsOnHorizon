import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SurfistComponent } from './surfist/surfist.component';
import { SurfistsListComponent } from './surfist/surfists-list/surfists-list.component';
import { SurfistFormComponent } from './surfist/surfist-form/surfist-form.component';
import { BateryComponent } from './batery/batery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SurfistComponent,
    SurfistsListComponent,
    SurfistFormComponent,
    BateryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
