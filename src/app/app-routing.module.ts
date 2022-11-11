import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { UnauthenticatedGuard } from './guards/unauthenticated.guard';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'matches',
        pathMatch: 'full',
      },
      {
        path: 'matches',
        loadChildren: () =>
          import('./partidas/partidas.module').then((m) => m.MatchesModule),
      },
      {
        path: 'ranking',
        loadChildren: () =>
          import('./leaderboard/leaderboard.module').then(
            (m) => m.RankingModule
          ),
      },
      {
        path: 'back-office',
        loadChildren: () =>
          import('./back/back.module').then((m) => m.BackModule),
        canActivate: [AdminGuard],
        canActivateChild: [AdminGuard],
      },
    ],
    canActivate: [AuthenticatedGuard],
    canActivateChild: [AuthenticatedGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canActivate: [UnauthenticatedGuard],
    canActivateChild: [UnauthenticatedGuard],
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./errors/errors.module').then((m) => m.ErrorsModule),
  },
  {
    path: '**',
    redirectTo: 'errors/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
