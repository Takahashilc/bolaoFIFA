import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaSenhaComponent } from './novasenha.component';
import { VMessageModule } from 'src/app/shared/vmessage/vmessage.module';

@NgModule({
  declarations: [NovaSenhaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule.forChild([{ path: '', component: NovaSenhaComponent }]),
  ],
})
export class NovaSenhaModule {}
