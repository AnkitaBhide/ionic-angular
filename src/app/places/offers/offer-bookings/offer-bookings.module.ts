import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


// import { OfferBookingsPageRoutingModule } from './offer-bookings-routing.module';

import { OfferBookingsPage } from './offer-bookings.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OfferBookingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfferBookingsPage]
})
export class OfferBookingsPageModule {}
