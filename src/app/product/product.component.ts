import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component( {
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
} )
export class ProductComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
