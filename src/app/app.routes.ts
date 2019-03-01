import { Routes } from '@angular/router';
// import { AuthGuard } from './service/ZauthGuard';

import { NavigationComponent } from './main/navigation/navigation.component'

// Body
import { HomeComponent } from './main/home/home.component'
import { DashboardComponent } from './main/dashboard/dashboard.component'
import { CertificatesComponent } from './main/certificates/certificates.component'
import { UploadComponent } from './main/upload/upload.component'
import { LocComponent } from './main/loc/loc.component'

export const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'certificates', component: CertificatesComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'loc', component: LocComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
]