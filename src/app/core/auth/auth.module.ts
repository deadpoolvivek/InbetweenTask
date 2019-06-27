import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { SetPasswordComponent } from './set-password/set-password.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material.module';


const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
//   {
//     path: 'forgot-password',
//     component: ForgotPasswordComponent
//   },
//   {
//     path: 'set-password/:userId',
//     component: SetPasswordComponent
//   }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    SharedModule,
    MaterialModule
  ],
  declarations: [
    // ForgotPasswordComponent,
    // SetPasswordComponent,
    LoginComponent],
    exports: [
      RouterModule
    ]
})
export class AuthModule { }
