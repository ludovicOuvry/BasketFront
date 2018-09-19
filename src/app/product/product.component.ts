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
    tab: Product[];
    constructor( private storage: SessionStorageServiceService, private data: DataService ) { }

    ngOnInit() {
        // console.clear();
         this.storage.remplir();
        
         this.tab = this.storage.getproduct();
        console.log( "YEST" );
        console.log( "nombre de Produit:" + this.tab.length);
        
        
    }
    
    valide(){
      //  this.data.valide(this.tab);
        this.data.valide(this.tab);
    }
    
    post(){
        //  this.data.valide(this.tab);
          this.data.post(this.tab);
      }

}