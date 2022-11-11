import { Team } from './times';

export interface Match {
  id: number;
  teams: Team[];
  result: string;
  date: string;
}
