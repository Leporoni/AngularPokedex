import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  constructor() {}

  getAlunos() {
    return [{ nome: 'Alessandro' }, { nome: 'Andresa' }, { nome: 'Amelia' }];
  }
}
