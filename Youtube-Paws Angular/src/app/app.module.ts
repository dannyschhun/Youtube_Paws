import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { CollapseModule } from 'ngx-bootstrap/collapse';

>>>>>>> refs/remotes/origin/Danny_C

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './services/user.service';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    RoutingModule
=======
    RoutingModule,
    CollapseModule.forRoot()
  ],
  exports: [
    CollapseModule
>>>>>>> refs/remotes/origin/Danny_C
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
