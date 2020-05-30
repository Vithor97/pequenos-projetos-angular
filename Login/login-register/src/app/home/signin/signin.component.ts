import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'ap-signin',
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    fromUrl:string
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,


 ) { }

    ngOnInit(): void {

        //to pegando a url depois que tentei acessar a rota protegida
 

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
       
    } 

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        console.log('clicou no metodo login')
    }
}