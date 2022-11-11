import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

import { PartidaService } from '../../services/partida.service';
import { Match } from '../../shared/interfaces/partida';

@Component({
  selector: 'app-results',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {
  matches!: Match[];

  constructor(
    private partidaService: PartidaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.partidaService.findAll().subscribe((matches) => {
      this.matches = matches;
    });
  }

  setResult({ id, result }: Match) {
    this.partidaService.changeMatchResult(result, id).subscribe(() => {
      this.toastr.success('Resultado alterado com sucesso!');
    });
  }
}
