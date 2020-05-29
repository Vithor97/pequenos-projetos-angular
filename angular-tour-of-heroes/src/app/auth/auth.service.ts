import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../user/user';
import { of } from 'rxjs';
import { error } from 'util';



const USERS:User[] = [{
    name: 'vitor',
    password:'123'
}]

@Injectable({
    providedIn:'root'
})
export class AuthService {


    logado: boolean = false

    mostraMenuEmitter = new EventEmitter<boolean>();

    constructor(){}

    

    authenticate(userName: string, password: string){


        return of(USERS.find(user => {
            if(user.name == userName && user.password === password){
                console.log('entrou aqui')
                this.logado = true
                this.mostraMenuEmitter.emit(true);
                return true

            }
            else{
                this.mostraMenuEmitter.emit(false);
                return error
            }
        }))
    }
}