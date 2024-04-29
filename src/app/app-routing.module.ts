import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '' , component: LandingPageComponent},
  // { path: 'login', component: NavbarComponent }
  { path: 'dashboard' , component: AdminDashboardComponent},
  { path: 'registration' , component: LandingPageComponent},

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports : [RouterModule]
})
export class AppRoutingModule { }
