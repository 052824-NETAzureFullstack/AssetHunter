import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './results/results.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { MortgageComponent } from './mortgage/mortgage.component';
//import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'results', component: ResultsComponent},
    {path: 'strategies', component: StrategiesComponent},
    {path: 'mortgage', component: MortgageComponent}

    //{path: 'terms', component: TermsComponent},

    //{path: '**', redirectTo: 'not-found', pathMatch: 'full' }
    //{path: 'one', component: RouteOneComponent, canActivate: [routeLockGuard]},
];
