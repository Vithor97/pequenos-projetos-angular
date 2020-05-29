import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/signup.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [HomeComponent, SignInComponent, SignUpComponent],
    imports: [
        NgbModule, 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}