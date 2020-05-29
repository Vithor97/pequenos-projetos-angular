import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    links = [
        { title: 'login', fragment: '/signin' },
        { title: 'Registro', fragment: '/signup' }
      ];

    title = 'login-register';
    active = 1;

    constructor(public route: ActivatedRoute) {}

 }