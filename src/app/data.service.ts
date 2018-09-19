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
    
    valide(p:Product[]){
        return  this.http.post(this.url+"valide",p,httpOptions).subscribe(result => {
            console.log(result);
        }, error => console.log('There was an error: '));
    }
    }


