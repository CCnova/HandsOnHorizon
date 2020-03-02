import { Injectable } from '@angular/core';
import { SURFISTS_DATA } from './surfist/mock-surfists';
import { Surfist } from './surfist/surfist.model';

@Injectable({
  providedIn: 'root'
})
export class SurfistService {
  surfists: Surfist[] = SURFISTS_DATA;

  constructor() { }

  getAllSurfists(): Surfist[] {
    return this.surfists;
  }

  registerSurfist(sName: string) {
    const newSurfist: Surfist = {id: this.surfists[this.surfists.length - 1].id + 1, name: sName, points: []};

    this.surfists.push(newSurfist);

    console.log(this.surfists);
  }
}
