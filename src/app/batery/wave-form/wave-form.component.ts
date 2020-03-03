import { Component, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BateryService } from 'src/app/batery.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-wave-form',
  templateUrl: './wave-form.component.html',
  styleUrls: ['./wave-form.component.css']
})
export class WaveFormComponent {
  waveNumberString: string;
  surfistName: string;
  newScoreString: string;
  @Input() bateryId: number;
  @Output() newScoreAdded: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private _batService: BateryService) {}

  onSubmit(f: NgForm) {
    this._batService.registerNewScore(this.bateryId, parseInt(this.waveNumberString), this.surfistName, parseInt(this.newScoreString));

    this.newScoreAdded.emit()

    f.reset();
  }
}
