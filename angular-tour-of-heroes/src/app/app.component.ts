import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Tour of Heroes';
  inComponent: boolean = false;
  mostraMenu:false;

  constructor(private auth:AuthService){}

  ngOnInit(){
    this.auth.mostraMenuEmitter.subscribe(
      mostra=> this.mostraMenu  = mostra
    )
  }
}
