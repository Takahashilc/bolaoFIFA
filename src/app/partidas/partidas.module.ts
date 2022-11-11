import { TipModule } from './tipo/tipo.module';
import { FormsModule } from '@angular/forms';
import { MatchModule } from './match/match.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './partidas.component';
import { MatchTodayModule } from './partidahoje/partidahoje.module';

@NgModule({
  declarations: [MatchesComponent],
  imports: [
    CommonModule,
    MatchTodayModule,
    MatchModule,
    FormsModule,
    TipModule,
    RouterModule.forChild([{ path: '', component: MatchesComponent }]),
  ],
})
export class MatchesModule {}
