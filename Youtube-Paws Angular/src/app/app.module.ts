import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AftermathComponent } from './components/aftermath/aftermath.component';
import { WatchComponent } from './components/watch/watch.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    NavComponent,
    HomeComponent
=======
    HomeComponent,
    NavComponent,
    SubscriptionsComponent,
    SettingsComponent,
    AftermathComponent,
    WatchComponent,
>>>>>>> refs/remotes/origin/DevRepo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    CollapseModule.forRoot()
  ],
  exports: [
    CollapseModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }