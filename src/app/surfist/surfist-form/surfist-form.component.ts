import { Component } from '@angular/core';

@Component({
  selector: 'app-surfist-form',
  templateUrl: './surfist-form.component.html',
  styleUrls: ['./surfist-form.component.css']
})
export class SurfistFormComponent {

  newHeroName: string;
  submitted: Boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
