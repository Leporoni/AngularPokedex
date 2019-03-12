import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../services/alunos.service';

@Component({
  selector: 'app-meu-component2',
  templateUrl: './meu-component2.component.html',
  styleUrls: ['./meu-component2.component.css'],
  providers: [AlunosService]
})
export class MeuComponent2Component implements OnInit {

  alunos = []

  constructor(private alunosService: AlunosService) {

   }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }



}
