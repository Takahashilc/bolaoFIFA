import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((module) => module.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./registrar/registrar.module').then(
            (module) => module.RegisterModule
          ),
      },
      {
        path: 'email-code/:token',
        loadChildren: () =>
          import('./confimacao-email/confirmacao-email.module').then(
            (module) => module.ConfirmacaoEmailModule
          ),
      },
      {
        path: 'email-password-reset',
        loadChildren: () =>
          import('./reset-senha/reset-senha.module').then(
            (module) => module.ResetSenhaModule
          ),
      },
      {
        path: 'password-reset/:token',
        loadChildren: () =>
          import('./novasenha/novasenha.module').then(
            (module) => module.NovaSenhaModule
          ),
      },
    ]),
  ],
})
export class CoreModule {}
