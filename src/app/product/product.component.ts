import { Component, OnInit } from '@angular/core';
import { SessionStorageServiceService } from '../session-storage-service.service';
import { Observable } from 'rxjs';

@Component( {
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
} )
export class ProductComponent implements OnInit {
tab = [];
    constructor(private storage: SessionStorageServiceService) { }

    ngOnInit() {
       // console.clear();
        this.storage.remplir();
        
        this.tab =this.storage.getproduct();
        console.log("YEST");
        console.log("nombre de Produit:"+this.tab.length+this.tab[0])
        
        
    }

}
