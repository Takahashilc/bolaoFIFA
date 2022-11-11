import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackComponent } from './back.component';

@NgModule({
  declarations: [BackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BackComponent,
        children: [
          {
            path: '',
            redirectTo: 'logs',
            pathMatch: 'full',
          },
          {
            path: 'admin',
            loadChildren: () =>
              import('./admin/admin.module').then((m) => m.AdminModule),
          },
          {
            path: 'logs',
            loadChildren: () =>
              import('./logs/logs.module').then((m) => m.LogsModule),
          },
          {
            path: 'results',
            loadChildren: () =>
              import('./resultados/resultados.module').then(
                (m) => m.ResultadosModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class BackModule {}
