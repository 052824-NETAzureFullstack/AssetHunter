import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    //{path: 'login', component: LoginComponent,title: 'Login'},
    //{path: 'register', component: RegisterComponent, title: 'Register'},
    {path: '', component: LoginComponent, title: 'Asset Hunter'},
    //{path: 'results', component: ResultsComponent, Results'},
    //{path: 'strategies', component: StrategiesComponent, title: 'Strategies'},
    //{path: 'terms', component: TermsComponent, title: 'AssetHunter/Terms'}
];
