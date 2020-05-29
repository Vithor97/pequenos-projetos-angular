import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/signup.component';


const routes: Routes = [
    { 
        path: '',
        component: HomeComponent,
        children: [
            { 
                path: '',
                component: SignInComponent,
                data:{
                    title: 'Sign in'
                }
            }, 
            { 
                path: 'signin',
                component: SignInComponent,
                data:{
                    title: 'Sign in'
                }
            },
            { 
                path: 'signup',
                component: SignUpComponent,
                data:{
                    title: 'Sign up'
                }
            },            
        ]
    },              
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }