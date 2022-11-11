import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BolaoComponent } from './bolao.component';

@NgModule({
  declarations: [BolaoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BolaoComponent }]),
  ],
})
export class BolaoModule {}
