import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioAlunoComponent } from './formulario-aluno/formulario-aluno.component';

@NgModule({
  declarations: [
    FormularioAlunoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormularioAlunoComponent
  ]
})
export class AlunoModule { }
