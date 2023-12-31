import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LandingPageComponent,
    CardComponent
  ]
})
export class LandingPageModule { }
