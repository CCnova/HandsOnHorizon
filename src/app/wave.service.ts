import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wave } from './batery/wave.model';

@Injectable({
  providedIn: 'root'
})
export class WaveService {
  private wavesUrl: string = 'http://127.0.0.1:8000/api/waves';

  constructor(private http: HttpClient) { }

  getAllWaves() {
    return this.http.get<Wave[]>(this.wavesUrl);
  }

  getWaveById(waveId: number) {
    return this.http.get<Wave>(this.wavesUrl + `/${waveId}`);
  }
}
