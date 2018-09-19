import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from './product/Product';

const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

@Injectable( {
    providedIn: 'root'
} )


export class DataService {

    constructor( private http: HttpClient ) { }
   

    getUsers() {
        return this.http.get( 'https://jsonplaceholder.typicode.com/users' )
    }

    getProduct() {
        return this.http.get<Product[]>('http://localhost:8080/');
    }
    postProduct(url : string, p:Product){
            return  this.http.post(url,p,httpOptions).subscribe(result => {
                console.log(result);
            }, error => console.log('There was an error: '));
        }
    }


