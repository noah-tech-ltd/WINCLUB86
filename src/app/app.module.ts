import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IosInstallTutorialComponent } from './ios-install-tutorial/ios-install-tutorial.component';
import { AndroidInstallTutorialComponent } from './android-install-tutorial/android-install-tutorial.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IosInstallTutorialComponent,
    AndroidInstallTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
