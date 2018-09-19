import { Component, OnInit } from '@angular/core';
import { SessionStorageServiceService } from '../session-storage-service.service';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import {Product} from './product';

@Component( {
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
} )


export class ProductComponent implements OnInit {
    constructor( private storage: SessionStorageServiceService, private data: DataService ) { }

    ngOnInit() {
        // console.clear();
         this.storage.remplir();
        
    }
    
    valide(){
        this.tab = this.storage.getproduct();
        this.data.valide(this.storage.getproduct());
    }
    
    post(){
        //  this.data.valide(this.tab);
          this.data.post(this.tab);
      }
    plus(id:Number){
        console.log("+"+id);
       this.storage.plus(id:Number);
       
    }
    
    moins(id:Number){
        this.storage.moins(id:Number);
     }

}