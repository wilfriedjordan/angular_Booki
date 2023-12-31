import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/component/landing-page/landing-page.component';
import { HebergementComponent } from './hebergement/component/hebergement/hebergement.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path : 'hebergement',component: HebergementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
