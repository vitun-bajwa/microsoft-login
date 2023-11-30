import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsalService, MSAL_INSTANCE, MsalModule } from "@azure/msal-angular";
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
export function MSALInstanceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
    auth: {
      clientId: '52b54be9-66bb-4e92-b674-93fdd15a5661',
      redirectUri: 'http://localhost:4200'
    }
  })
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MsalModule
  ],
  providers: [
    {
      provide:MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
