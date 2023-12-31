import { NgModule } from "@angular/core";
import{ CommonModule } from '@angular/common';
import { HebergementComponent } from "./component/hebergement/hebergement.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HebergementComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HebergementComponent
  ]
})

export class HebergementModule { }
