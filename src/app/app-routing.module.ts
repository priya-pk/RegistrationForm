import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'adminLogin',
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegistrationComponent
  },
  {
    path:'adminLogin',
    component:AdminLoginComponent
  },
  {
    path:'adminRegister',
    component:AdminRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
