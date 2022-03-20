import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OAuthModule } from "angular-oauth2-oidc";
import { LoginToPageComponent } from "./login-to-page/login-to-page.component";
import { OidcService } from "./oidc.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [AppComponent, LoginToPageComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, OAuthModule.forRoot(),HttpClientModule,ReactiveFormsModule],
  providers: [OidcService,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
