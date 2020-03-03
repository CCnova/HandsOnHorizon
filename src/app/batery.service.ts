import { Injectable, OnInit } from '@angular/core';

import { BATERIES_DATA } from './batery/mock-bateries';
import { WAVES_DATA } from './batery/mock-waves';

import { Batery } from './batery/batery.model';
import { Wave } from './batery/wave.model';

@Injectable({
  providedIn: 'root'
})
export class BateryService implements OnInit {
  bateries: Batery[] = BATERIES_DATA;
  waves: Wave[] = WAVES_DATA;

  constructor() { }

  ngOnInit() {

  }

  getAllBateries(): Batery[] {
    return this.bateries;
  }

  registerNewWave(bateryId: number,part: string, scores: string) {
    const newWaveParticipants = part.split(',');
    const newWaveScores = scores.split(',').map(x => +x);

    const newWave: Wave = {
      id: this.waves[this.waves.length - 1].id + 1,
      surfists: newWaveParticipants,
      scores: newWaveScores
    }

    for(let bat of this.bateries) {
      if(bat.id === bateryId) {
        bat.waves.push(newWave);
      }
    }

    alert('Onda Registrada com sucesso!');
  }
}

