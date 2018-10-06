import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product/Product';
import {environment} from '../environments/environment';

const httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' } )
};

@Injectable( {
    providedIn: 'root'
} )


export class DataService {
    url: string = environment.baseUrl

    constructor( private http: HttpClient ) { }

    valide( p: Product[] ) {
        return this.http.post( this.url + "valide", p, httpOptions ).subscribe( result => {
            console.log( result );
        }, error => console.log( 'There was an error: ' ) );
    }
    
    
    post( p: Product[] ) {
        return this.http.post( this.url, p[0], httpOptions ).subscribe( result => {
            console.log( result );
        }, error => console.log( 'There was an error: ' ) );
    }
}


