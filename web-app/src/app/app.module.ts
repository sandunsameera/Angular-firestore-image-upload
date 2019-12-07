import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFireModule} from "@angular/fire";
// import { AngularFireStorageModule} from "@angular/fire/storage";
// import { AngularFireDatabaseModule} from "@angular/fire/database";
import { environment } from "../environments/environment";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
