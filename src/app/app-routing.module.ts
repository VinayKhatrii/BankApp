import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './includes/nav/contact-us/contact-us.component';
import { OpenAnAccountComponent } from './includes/nav/open-an-account/open-an-account.component';
import { ApplyForLoanComponent } from './includes/nav/apply-for-loan/apply-for-loan.component';
import { AboutUsComponent } from './includes/nav/about-us/about-us.component';
import { HomeComponent } from './includes/home/home.component';
import { OffersComponent } from './includes/extra/offers/offers.component';
import { BankAdminComponent } from './bank-admin/bank-admin.component';
import { LoginComponent } from './includes/home/online-login/login/login.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { ForgotPasswordComponent } from './includes/home/online-login/forgot-password/forgot-password.component';
import { UserManagementComponent } from './bank-admin/user-management/user-management.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyPolicyComponent } from './includes/nav/policies/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './includes/nav/policies/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'new-account', component: OpenAnAccountComponent },
  { path: 'apply-for-loan', component: ApplyForLoanComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: "offers", component: OffersComponent },
  { path: "login", component: LoginComponent },
  { path: "details", component: UserInterfaceComponent },
  { path: "password-reset", component: ForgotPasswordComponent },
  { path: "admin-login", component: BankAdminComponent },
  { path: "admin", component:UserManagementComponent},
  { path: "privacy-policy", component:PrivacyPolicyComponent},
  { path: "terms-conditions", component:TermsConditionsComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
