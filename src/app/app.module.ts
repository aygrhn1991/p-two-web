import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NZ_ICONS } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { Routes, RouterModule } from '@angular/router';
import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline } from '@ant-design/icons-angular/icons';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { IndexComponent } from './pages/admin/index/index.component';
import { PlatformComponent } from './pages/admin/platform/platform.component';
import { GuardService } from './services/guard.service';

registerLocaleData(zh);
const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent, canActivate: [GuardService] },
      { path: 'platform', component: PlatformComponent, canActivate: [GuardService] },
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    IndexComponent,
    PlatformComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
