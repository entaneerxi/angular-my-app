import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerComponent } from './components/computer/computer.component';
import { SharedsModule } from '../shareds/shareds.module';
import { AuthenticationRouting } from './autentication.routing';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule
  ],
  declarations: [ComputerComponent]
})
export class AuthenticationModule { }
