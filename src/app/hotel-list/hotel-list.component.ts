import { Component, OnInit } from '@angular/core';

// import { HotelsService } from '../services/hotels.service';
// import { Observable, of } from 'rxjs';
// import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  // public page: PageEvent = {
  //   pageIndex: 1,
  //   pageSize: 2,
  //   length: 10
  // };
  // public isLoading$: Observable<boolean> = of(true);
  // public hotels$: Observable<IHotel[]>;
  public constructor(
    // private hotelsService: HotelsService
  ) { }

  public ngOnInit(): void {
    // this.getHotels(this.page);

    // setTimeout(() => {
    //   this.isLoading$ = of (false);
    // }, 3000);
  }

  // public getHotels(event: PageEvent) {
  //   this.hotels$ = this.hotelsService.getHotels(event);
  // }
}
