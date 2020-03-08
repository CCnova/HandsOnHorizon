import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() bateryId: number;
  @Output('onBateryChanged') bateryChanged = new EventEmitter<number>();

  constructor(private _batService: BateryService) {}

  async onSubmit(f: NgForm) {
    await this._batService.registerNewWave(this.bateryId, this.newWaveParticipantsString, this.newWaveScoresString)

    this.bateryChanged.emit(this.bateryId);


    f.reset();
  }
}
