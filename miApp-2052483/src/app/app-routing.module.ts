import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CamaraComponent } from './camara/camara.component';

const routes: Routes = [
  {
    path: 'camara',
    component: CamaraComponent
  },
  {
    path: '',
    redirectTo: '/camara',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
