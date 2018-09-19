import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {Product} from './product/product'


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SessionStorageServiceService {
    
    array: Product[] = []

  constructor(@Inject(SESSION_STORAGE) private storage:StorageService) { }
    public remplir(): void {
        let produit = {
                "id":0,
                "name":"chaise",
                "compagny":"IKEA",
                "price":21
            };
        this.storage.set("0",JSON.stringify(produit));
        
         produit = {
                "id":1,
                "name":"table",
                "compagny":"IKEA",
                "price":10
            };
        
        this.storage.set("1",JSON.stringify(produit));
                
    }
    
    public getproduct() {
        this.array[0]=this.storage.get("0");
        this.array[1]=this.storage.get("1");
        return this.array;
    }
}
