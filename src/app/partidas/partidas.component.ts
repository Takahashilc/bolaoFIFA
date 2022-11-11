import { Component, OnInit } from '@angular/core';

import { PartidaService } from '../services/partida.service';
import { TipEvent } from '../shared/interfaces/eventos';
import { Match } from '../shared/interfaces/partida';

@Component({
  selector: 'app-matches',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.scss'],
})
export class MatchesComponent implements OnInit {
  allMatches!: Match[];
  matchesToday!: Match[];
  datepicker!: string;
  selectedTip!: TipEvent;

  constructor(private partidaService: PartidaService) {}

  ngOnInit(): void {
    this.partidaService
      .findAll({
        date: new Date('2022-11-26T00:00:00.000Z').toISOString().split('T')[0],
      })
      .subscribe((matches) => {
        this.matchesToday = matches;
      });

    this.partidaService.findAll().subscribe((matches) => {
      this.allMatches = matches;
    });
  }

  getMatchesByDate() {
    this.partidaService
      .findAll({ date: new Date(this.datepicker).toISOString().split('T')[0] })
      .subscribe((matches) => {
        this.allMatches = matches;
      });
  }

  onSelectedTip(event: TipEvent) {
    this.selectedTip = event;
  }
}
