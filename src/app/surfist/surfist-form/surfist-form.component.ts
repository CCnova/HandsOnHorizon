import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurfistService } from '../../surfist.service';
@Component({
  selector: 'app-surfist-form',
  templateUrl: './surfist-form.component.html',
  styleUrls: ['./surfist-form.component.css']
})
export class SurfistFormComponent {

  newSurfistName: string;

  constructor(private _surfService: SurfistService) {}

  onSubmit(surfistF: NgForm) {
    this._surfService.registerSurfist(this.newSurfistName);

    surfistF.reset();
  }
}
