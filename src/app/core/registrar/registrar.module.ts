import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar.component';
import { VMessageModule } from 'src/app/shared/vmessage/vmessage.module';

@NgModule({
  declarations: [RegistrarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule.forChild([{ path: '', component: RegistrarComponent }]),
  ],
})
export class RegisterModule {}
