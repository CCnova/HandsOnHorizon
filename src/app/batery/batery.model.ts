import { Wave } from './wave.model';

export interface Batery {
  id: number;
  waves: Wave[];
  winner: string;
}
