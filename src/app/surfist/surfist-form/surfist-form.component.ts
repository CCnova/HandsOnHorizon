import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-surfist-form',
  templateUrl: './surfist-form.component.html',
  styleUrls: ['./surfist-form.component.css']
})
export class SurfistFormComponent {

  newHeroName: string;
  submitted: Boolean = false;

  onSubmit(surfistF: NgForm) {
    this.submitted = true;
    console.log(this.newHeroName);

    surfistF.reset();
  }
}
