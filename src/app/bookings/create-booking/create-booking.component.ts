import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent  implements OnInit {
  @Input() selectedPlace:Place
  constructor(private modelCntr: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modelCntr.dismiss('null', 'cancel');
  }

  onBookPlace(){
    this.modelCntr.dismiss('Booking has been dene!', 'Confirm')
  }

}
