import { Component, OnInit } from '@angular/core';
import { Aluno } from './../../../models/Aluno';
import { AlunoService } from './../../../service/aluno.service';

@Component({
  selector: 'app-formulario-aluno',
  templateUrl: './formulario-aluno.component.html',
  styleUrls: ['./formulario-aluno.component.css']
})

export class FormularioAlunoComponent implements OnInit {

  aluno: Aluno = {
    id: 0,
    nome: '',
    login: '',
    senha: '',
    email: '',
    telefone: '',
    tipo: 'ALUNO',
    status: 'INATIVO',
    dataNascimento: '',
    altura: 0,
    peso: 0,
    circAbdominal: 0
  }

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
  }

  adicionar() {
    console.log("Aluno: " + JSON.stringify(this.aluno));
    this.alunoService.adicionar(this.aluno)
      .then(dados => {
        console.log("Aluno: " + dados.nome + " Salvo!")
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  enviarNotificacao() {

  }

}
