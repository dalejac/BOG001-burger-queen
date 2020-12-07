import { Component , OnInit } from '@angular/core';

@Component ({
      selector: 'app-chef' ,
      templateUrl: './chef.component.html',
      styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

      constructor() {console.log("componente cargado"); }
      
      
      ngOnInit(): void {
      }
    
    }