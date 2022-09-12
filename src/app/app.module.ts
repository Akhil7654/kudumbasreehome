import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AddmemberComponent } from './addmember/addmember.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainhomeComponent,
    AdminhomeComponent,
    SidebarComponent,
    LoginadminComponent,
    AddmemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
