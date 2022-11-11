import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResetSenhaComponent } from './reset-senha.component';
import { VMessageModule } from 'src/app/shared/vmessage/vmessage.module';

@NgModule({
  declarations: [ResetSenhaComponent],
  imports: [
    CommonModule,
    FormsModule,
    VMessageModule,
    RouterModule.forChild([{ path: '', component: ResetSenhaComponent }]),
  ],
})
export class ResetSenhaModule {}
