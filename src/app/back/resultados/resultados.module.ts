import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './resultados.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ResultadosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule,
    RouterModule.forChild([{ path: '', component: ResultadosComponent }]),
  ],
})
export class ResultadosModule {}
