import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';
import { ProjectListComponent } from './pages/project/project-list/project-list.component';
import { CreateProjectComponent } from './pages/project/create-project/create-project.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: 'projects', component: ProjectListComponent ,canActivate:[AuthGuard]},
  { path: 'create-project', component: CreateProjectComponent,canActivate:[AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
