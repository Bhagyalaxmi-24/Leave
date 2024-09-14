import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http';  // If using HTTP requests
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CompanyComponent } from './company/company.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LeavecalenderComponent } from './leavecalender/leavecalender.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaverequestComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ProfileComponent,
    CompanyComponent,
    LeavehistoryComponent,
    AboutusComponent,
    LeavecalenderComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
