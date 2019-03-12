import { AlunosService } from './services/alunos.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { MeuComponent2Component } from './meu-component2/meu-component2.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MeuComponent2Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
