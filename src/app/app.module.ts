import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';  // <-Add here
import { StorageServiceModule} from 'angular-webstorage-service';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    StorageServiceModule
  ],    
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
