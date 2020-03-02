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
}
