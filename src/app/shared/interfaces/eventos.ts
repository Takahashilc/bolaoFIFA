import { Match } from './partida';
import { TipType } from './tipos';

export interface TipEvent {
  match: Match;
  type: TipType;
}
