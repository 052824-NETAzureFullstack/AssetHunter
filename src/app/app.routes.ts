import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
    //{path: 'login', component: LoginComponent,title: 'Login'},
    //{path: 'register', component: RegisterComponent, title: 'Register'},
    {path: '', component: MainComponent, title: 'Home Page'},
    //{path: 'results', component: ResultsComponent, Results'},
    //{path: 'strategies', component: StrategiesComponent, title: 'Strategies'},
    {path: 'terms', component: TermsComponent, title: 'Terms and Conditions '}



];
