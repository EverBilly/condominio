import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
    // { path: 'usuario',loadChildren: 'app/home/usuario/usuario.module#UsuarioModule', canActivate: [UsuarioGuard]},
    { path: 'admin',loadChildren: 'app/home/admin/admin.module#AdminModule', canActivate: [AdminGuard]},
  ]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
