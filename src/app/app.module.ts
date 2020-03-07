import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SurfistComponent } from './surfist/surfist.component';
import { SurfistsListComponent } from './surfist/surfists-list/surfists-list.component';
import { SurfistFormComponent } from './surfist/surfist-form/surfist-form.component';
import { BateryComponent } from './batery/batery.component';
import { BateryListComponent } from './batery/batery-list/batery-list.component';
import { BateryFormComponent } from './batery/batery-form/batery-form.component';
import { WaveFormComponent } from './batery/wave-form/wave-form.component';
import { WaveListComponent } from './batery/wave-list/wave-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SurfistComponent,
    SurfistsListComponent,
    SurfistFormComponent,
    BateryComponent,
    BateryListComponent,
    BateryFormComponent,
    WaveFormComponent,
    WaveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
