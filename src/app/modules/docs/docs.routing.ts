import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs.component';
import { NgModule } from '@angular/core';
import { DocsService } from './docs.service';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    resolve: {
      config: DocsService
    },
    children: [
      {
        path: 'shade-demo',
        loadChildren: './../shade-demo/shade-demo.module#ShadeDemoModule'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'shade-demo'
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutesModule { }
