import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'linkedInResponse',
  templateUrl: './linked-in-response.component.html',
  styleUrls: ['./linked-in-response.component.scss']
})
export class LinkedInResponseComponent implements OnInit {

  linkedInToken = "";

  constructor(private route: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
    var body = {
      grant_type: "authorization_code",  // value of this field should always be: 'authorization_code'
      code: this.linkedInToken,
      redirect_uri: "http://localhost:4200/linkedIn",  // The same redirect_url used in step 2.1 (in login.component.ts)
      client_id: '86jyakbedizz0r', // Follow step 1.2
      client_secret: 'KFCGhreTS3rXiDqN'   // Follow step 1.2
    }
    this.http.get('https://www.linkedin.com/oauth/v2/accessToken').subscribe(res => {
      console.log(res)
    })
  }

}
