import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SessionStorageServiceService {
    
    array = []

  constructor(@Inject(SESSION_STORAGE) private storage:StorageService) { }
    public remplir(): void {
        let produit = {
                "id":0,
                "name":"chaise",
                "compagny":"IKEA"
            }
        this.storage.set(0,JSON.stringify(produit));
                
    }
    
    public getproduct(): {
        array[0]=this.storage.get(0);
        return this.array;
    }
}
