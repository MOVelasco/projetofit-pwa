import { FormularioAlunoComponent } from './views/aluno/formulario-aluno/formulario-aluno.component';
import { LoginComponent } from './shared/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastroAluno', component: FormularioAlunoComponent },
  { path: 'edicaoAluno/:id', component: FormularioAlunoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
