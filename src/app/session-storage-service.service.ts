import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Product } from './product/product'


@Injectable( {
    providedIn: 'root'
} )
@Injectable()
export class SessionStorageServiceService {

    array: Product[] = []

    constructor( @Inject( SESSION_STORAGE ) private storage: StorageService ) { }
    public remplir(): void {
        let produit = {
            "id": 0,
            "name": "chaise",
            "compagny": "IKEA",
            "price": 21,
            "quantity": 1
        };
        this.storage.set( "0", produit );

        produit = {
            "id": 1,
            "name": "table",
            "compagny": "IKEA",
            "price": 10,
            "quantity": 1
        };

        this.storage.set( "1", produit );

    }

    public getproduct() {
        let i = 0;
        let accesStorage = [];
        Object.keys( this.storage ).forEach( key => accesStorage = this.storage[key] );
        let cle = Object.keys( accesStorage );

        for ( let cl of cle ) {
            this.array[i] = this.storage.get( cl );
            i++;
        }
        return this.array;
    }

    public plus( id: number ) {
        let p: Product = this.storage.get( id + "" );
        p.quantity = p.quantity + 1;
        this.storage.set( id + "", p );
    }

    public moins( id: number ) {
        let p: Product = this.storage.get( id + "" );
        if ( p.quantity > 0 ) {
            p.quantity--;
            this.storage.set( p.id + "", p );
        }
    }
}
