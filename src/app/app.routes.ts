import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';
import { ResultsComponent } from './results/results.component';
import { StrategiesComponent } from './strategies/strategies.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'main', component: MainComponent},
    {path: 'results', component: ResultsComponent},
    {path: 'strategies', component: StrategiesComponent}
    //{path: 'terms', component: TermsComponent},


    //{path: '**', redirectTo: 'not-found', pathMatch: 'full' }
    //{path: 'one', component: RouteOneComponent, canActivate: [routeLockGuard]},
];
