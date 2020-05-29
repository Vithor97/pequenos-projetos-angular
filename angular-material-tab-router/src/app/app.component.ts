import { Component, OnChanges } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1;
  teste
 
  constructor(private router: Router, private location: Location) {
    this.navLinks = [
        {
            label: 'First',
            link: './first',
            index: 0
        }, {
            label: 'Second',
            link: './second',
            index: 1
        }, {
            label: 'Third',
            link: './third',
            index: 2
        }, 
    ];
}
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
    console.log(this.router.url)
  }


ngOnInit(): void {
  const a = this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  console.log(this.router.url)
}

troca(){
  this.location.forward();
}

muda(event: Event){
  
  console.log("oi" +this.router.url)
  this.teste = this.router.url
  
}



}
