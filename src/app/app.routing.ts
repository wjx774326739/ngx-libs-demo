import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'docs',
        loadChildren: () => import('./modules/docs/docs.module').then(m => m.DocsModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'docs'
      }
    ]
  },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
