import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// entry point and the router outlet is defined in below component
import { AppComponent } from './app.component';

// Routes are necessary
import { routes } from './app.routes';

// Navigation
import { NavigationComponent } from './main/navigation/navigation.component'

// Body
import { HomeComponent } from './main/home/home.component'
import { DashboardComponent } from './main/dashboard/dashboard.component'
import { CertificatesComponent } from './main/certificates/certificates.component'
import { UploadComponent } from './main/upload/upload.component'
import { LocComponent } from './main/loc/loc.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DashboardComponent,
    CertificatesComponent,
    UploadComponent,
    LocComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
