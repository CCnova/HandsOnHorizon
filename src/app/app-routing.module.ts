import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfistsListComponent } from './surfist/surfists-list/surfists-list.component';
import { AppComponent } from './app.component';
import { BateryListComponent } from './batery/batery-list/batery-list.component';


const routes: Routes = [
  { path: "surfists", component: SurfistsListComponent},
  { path: "bateries", component: BateryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
