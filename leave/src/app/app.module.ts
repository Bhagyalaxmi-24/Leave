import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CompanyComponent } from './company/company.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LeavecalenderComponent } from './leavecalender/leavecalender.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CompanyComponent,
    ErrorComponent,
    FooterComponent,
    HomeComponent,
    LeavecalenderComponent,
    LeavehistoryComponent,
    LeaverequestComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
