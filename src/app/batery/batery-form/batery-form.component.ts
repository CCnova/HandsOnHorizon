import { Component } from '@angular/core';
import { BateryService } from '../../batery.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-batery-form',
  templateUrl: './batery-form.component.html',
  styleUrls: ['./batery-form.component.css']
})
export class BateryFormComponent {
  newWaveParticipantsString: string;
  newWaveScoresString: string;

  constructor(private _batService: BateryService) {}

  onSubmit(f: NgForm) {
    f.reset();
  }
}
