import { Component, OnInit } from '@angular/core';
import { WaveService } from 'src/app/wave.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wave-form',
  templateUrl: './wave-form.component.html',
  styleUrls: ['./wave-form.component.css']
})
export class WaveFormComponent implements OnInit {
  newParticipants: string;
  newScores: string;

  constructor(private _waveService: WaveService) { }

  ngOnInit(): void {
  }

  registerNewWave(participantsName: string, participantsScores: string) {

  }

  onSubmit(f: NgForm) {
    this._waveService.storeNewWave(this.newParticipants, this.newScores).subscribe(res => {
      console.log(`New wave id: ${res}`);
    });

    f.reset();
  }

}
