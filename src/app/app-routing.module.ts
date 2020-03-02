import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurfistsListComponent } from './surfist/surfists-list/surfists-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: "surfists", component: SurfistsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
