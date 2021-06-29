import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinkedInResponseComponent } from './linked-in-response/linked-in-response.component';
import { InstaResponseComponent } from './insta-response/insta-response.component';

export const routes: Routes = [
  { path: 'linkedIn', component: LinkedInResponseComponent },
  { path: 'instagram', component: InstaResponseComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
