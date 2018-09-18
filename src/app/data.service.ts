import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {Product} from './product/product.component';

@Injectable( {
    providedIn: 'root'
} )
export class DataService {

    constructor( private http: HttpClient ) { }

    getUsers() {
        return this.http.get( 'https://jsonplaceholder.typicode.com/users' )
    }

    getProduct() {
        return this.http.get('http://localhost:8080/')
    }
    postProduct(url : string, s:string){
            return  this.http.post(url,s);
        }
    }


