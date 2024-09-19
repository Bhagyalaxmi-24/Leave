import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { LeavecalenderComponent } from './leavecalender/leavecalender.component';
import { CompanyComponent } from './company/company.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'Contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'leave',component:LeaverequestComponent},
  {path:'history',component:LeavehistoryComponent},
  // {path:'calender',component:LeavecalenderComponent},
  // {path:'company',component:CompanyComponent},

  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
