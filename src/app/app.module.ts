import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PackagesComponent } from './packages/packages.component';
import { UsersComponent } from './users/users.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { PackageComponent } from './packages/package/package.component';
import { PackageListComponent } from './packages/package-list/package-list.component';

import {PackageService} from './packages/shared/package.service';
import { NavbarComponent } from './navbar/navbar.component';

import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

const appRoutes: Routes =  [
  {path:'', component: DashboardComponent},
  
  {path:'packages', component: PackagesComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PackagesComponent,
    UsersComponent,
    SubscribersComponent,
    PackageComponent,
    PackageListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
   
  ],
  providers: [PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
