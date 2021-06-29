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
    console.log("LinkedIn ---", this.linkedInToken)
  }

}
