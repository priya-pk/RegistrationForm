import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentService } from './shared/student.service';
import { AdminService } from './shared/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
