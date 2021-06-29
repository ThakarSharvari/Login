import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { CommonModule } from '@angular/common';
import { LinkedInResponseComponent } from './linked-in-response/linked-in-response.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { InstaResponseComponent } from './insta-response/insta-response.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LinkedInResponseComponent,
    InstaResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    SocialLoginModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2233341856795821')
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('308001803110-6mvdmfggs69j499u4m3r2jvrt4aca80q.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
