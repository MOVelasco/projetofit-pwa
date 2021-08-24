import { Aluno } from './../models/Aluno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  adicionar(aluno: Aluno): Promise<Aluno> {
    return this.http.post<Aluno>('http://localhost/api/aluno', aluno)
      .toPromise();
  }
}
