import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { LandingPageResolver } from './landingpage/landingpage.resolver';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'landing', component: LandingpageComponent, resolve: { data: LandingPageResolver},
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
      { path: 'home', component: HomeComponent },
      { path: 'new-user', component: NewUserComponent },
      { path: 'details/:id', component: EditUserComponent, resolve: {data : EditUserResolver} }
    ] },
];
