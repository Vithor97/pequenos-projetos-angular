import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder, 
        private route: Router,
        private authService:AuthService 
        ){}


    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(){

        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        // console.log(`Esta entrando no metodo 
        // login com o usuário: ${userName} e senha: ${password}`)

        this.authService.authenticate(userName, password)
        .subscribe(user =>{
            if(user){
                this.route.navigate(['main'])
            }else{
                alert('aqui novamente')
                this.loginForm.reset()
                this.route.navigate([''])
            }
        }
        )

    }
    
}