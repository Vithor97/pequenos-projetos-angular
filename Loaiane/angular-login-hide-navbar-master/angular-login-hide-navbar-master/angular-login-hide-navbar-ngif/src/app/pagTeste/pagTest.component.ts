import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './pagTest.component.html',
  styles: []
})
export class PagTestComponent {

  @ViewChild('nomeValor') nomeValor: ElementRef;
  @Input() nome:string 
  private nomes: string[] = ['vitor', 'isabela']

  addNome(newNome:string){
    if(newNome){

      this.nomes.push(newNome)
      this.nome = newNome
      this.nomeValor.nativeElement.value = ''
    }
    
  }
}



