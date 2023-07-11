import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
// import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place?: Place;
  // loadedPlaces?: Place[];
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    // this.loadedPlaces = this.placesService.places;
    // console.log(this.loadedPlaces)
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navcntrl.navigateBack('/places/tabs/discover');
    // this.modelCntrl.create({component: CreateBookingComponent, componentProps:{selectedPlace:this.place}}).then(modalEl => {
    //   modalEl.present();
    // });
    this.modalCtrl
    .create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BOOKED!');
      }
    });
  }

}
