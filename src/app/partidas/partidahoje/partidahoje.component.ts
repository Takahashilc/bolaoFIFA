import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TipEvent } from 'src/app/shared/interfaces/eventos';
import { Match } from 'src/app/shared/interfaces/partida';

@Component({
  selector: 'app-match-today',
  templateUrl: './partidahoje.component.html',
  styleUrls: ['./partidahoje.component.scss'],
})
export class MatchTodayComponent implements OnInit {
  @Input() match!: Match;
  @Output() selectedTip = new EventEmitter<TipEvent>();

  constructor() {}

  ngOnInit(): void {}

  selectTip(tip: TipEvent) {
    this.selectedTip.emit(tip);
  }

  matchFinished(match: Match) {
    return match.result !== 'NOT_PLAYED';
  }
}
