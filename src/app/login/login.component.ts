import { Component, OnInit } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }

  user!: SocialUser;
  loggedIn!: boolean;

  ngOnInit(): void {
    this.authService.authState.subscribe((user: SocialUser) => {
      debugger;
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
