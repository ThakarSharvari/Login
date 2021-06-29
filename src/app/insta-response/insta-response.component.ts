import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insta-response',
  templateUrl: './insta-response.component.html',
  styleUrls: ['./insta-response.component.scss']
})
export class InstaResponseComponent implements OnInit {

  instaToken = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.instaToken = this.route.snapshot.queryParams["code"];
    console.log("Insta ---", this.instaToken)
  }

}
