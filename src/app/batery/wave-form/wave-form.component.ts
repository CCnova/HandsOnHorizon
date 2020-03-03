import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-wave-form',
  templateUrl: './wave-form.component.html',
  styleUrls: ['./wave-form.component.css']
})
export class WaveFormComponent {
  waveNumberString: string;
  newScoreString: string;
  surfistName: string;

  constructor() {}

  onSubmit(f: NgForm) {}
}
