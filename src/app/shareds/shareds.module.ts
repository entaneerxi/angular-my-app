import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthContentComponent } from './auth-content/auth-content.component';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './auth-sidebar/auth-sidebar.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthContentComponent, AuthNavbarComponent, AuthSidebarComponent ],
  exports: [
    AuthContentComponent,
    AuthNavbarComponent,
    AuthSidebarComponent
  ]
})
export class SharedsModule { }
