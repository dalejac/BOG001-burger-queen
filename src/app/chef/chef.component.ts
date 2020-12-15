import { Component , OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component ({
      selector: 'app-chef' ,
      templateUrl: './chef.component.html',
      styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

      items: any; 

      constructor(private firestore: FirestoreService) {console.log("componente cargado"); }
      
      
      ngOnInit(): void {
      }
    
    }