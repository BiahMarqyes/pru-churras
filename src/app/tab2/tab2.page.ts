import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valor = 1;
  pontos1 = 0;
  pontos2 = 0;
  time1 = 0;
  time2 = 0;

  constructor() {}

  bt(valor: number){
    this.valor = valor;
  }

  soma1(){
    this.pontos1 += this.valor;
    this.valor = 1;
    if(this.pontos1 >=12){
      this.time1 += 1;
      this.pontos1=0;
      this.pontos2=0;
    }
  }
  soma2(){
    this.pontos2 += this.valor;
    this.valor = 1;
    if(this.pontos2 >=12){
      this.time2 += 1;
      this.pontos1=0;
      this.pontos2=0;
    }
  }

  subt1(){
    this.pontos1 -= this.valor;
    this.valor = 1;
  }

  subt2(){
    this.pontos2 -= this.valor;
    this.valor = 1;
  }

  reiniciar(){
    this.valor = 0;
    this.pontos1 = 0;
    this.pontos2 = 0;
    this.time1=0;
    this.time2=0;
  }

}

