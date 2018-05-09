import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AftermathComponent } from './components/aftermath/aftermath.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { WatchComponent } from './components/watch/watch.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'aftermath/:query', component: AftermathComponent},
    { path: 'settings', component: SettingsComponent}, 
    { path: 'subscriptions', component: SubscriptionsComponent },
    { path: 'watch', component: WatchComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule {}
