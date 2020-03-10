import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfistsListComponent } from './surfist/surfists-list/surfists-list.component';
import { AppComponent } from './app.component';
import { BateryListComponent } from './batery/batery-list/batery-list.component';
import { WaveListComponent } from './wave/wave-list/wave-list.component';



const routes: Routes = [
  { path: "surfists", component: SurfistsListComponent},
  { path: "bateries", component: BateryListComponent},
  { path: "waves", component: WaveListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
