import { Component, OnInit } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  linkedInCredentials = {
    clientId: "86jyakbedizz0r",
    redirectUrl: "http://localhost:4200/linkedIn",
    scope: "r_liteprofile%20r_emailaddress%20" // To read basic user profile data and email
  };

  instagramCredentials = {
    clientId: "282199513693092",
    redirectUrl: "https://localhost:4200/instagram"
  }

  user!: SocialUser;
  loggedIn!: boolean;

  ngOnInit(): void {
    this.authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  login() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${this.linkedInCredentials.clientId
      }&redirect_uri=${this.linkedInCredentials.redirectUrl}&scope=${this.linkedInCredentials.scope}`;
  }

  instaLogin() {
    window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${this.instagramCredentials.clientId}&redirect_uri=${this.instagramCredentials.redirectUrl}&scope=user_profile,user_media&response_type=code`
  }
}
