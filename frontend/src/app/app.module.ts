import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MerchComponent } from './pages/merch/merch.component';
import { EventsComponent } from './pages/events/events.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventsDashComponent } from './pages/dashboard/events-dash/events-dash.component';
import { MerchDashComponent } from './pages/dashboard/merch-dash/merch-dash.component';
import { UsersDashComponent } from './pages/dashboard/users-dash/users-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MerchComponent,
    EventsComponent,
    AboutUsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EventsDashComponent,
    MerchDashComponent,
    UsersDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }