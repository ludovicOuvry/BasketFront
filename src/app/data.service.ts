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
    url:string = "http://localhost:8080/"

    constructor( private http: HttpClient ) { }

    getProduct() {
        return this.http.get<Product[]>(this.url);
    }
    postProduct(p:Product){
            return  this.http.post(this.url+"create",p,httpOptions).subscribe(result => {
                console.log(result);
            }, error => console.log('There was an error: '));
        }
    
    fini(p:Product[]){
        return  this.http.post(this.url+"fini",p,httpOptions).subscribe(result => {
            console.log(result);
        }, error => console.log('There was an error: '));
    }
    }


