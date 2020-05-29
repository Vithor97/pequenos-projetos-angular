import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { TesteComponent } from './teste.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TesteComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,       
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule,
    AppRoutingModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
