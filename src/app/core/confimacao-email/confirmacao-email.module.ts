import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ConfirmacaoEmailComponent } from './confimacao-email.component';
import { VMessageModule } from 'src/app/shared/vmessage/vmessage.module';

@NgModule({
  declarations: [ConfirmacaoEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    VMessageModule,
    RouterModule.forChild([{ path: '', component: ConfirmacaoEmailComponent }]),
  ],
})
export class ConfirmacaoEmailModule {}
