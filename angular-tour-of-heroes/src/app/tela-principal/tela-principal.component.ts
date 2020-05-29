import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css'],
})
export class TelaPrincipalComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  logado(){
    return this.auth.logado
  }

}
