import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Observable, of } from 'rxjs';
// import { first, take } from 'rxjs/operators';
import { HotelsService } from '../services/hotels.service';
// import { FavoriteService } from '../services/favorite.service';
import { IHotel } from '../intesfaces/IHotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public page: PageEvent = {
    pageIndex: 1,
    pageSize: 2,
    length: 2
  };
  public isLoading$: Observable<boolean> = of(true);
  public hotels$: Observable<IHotel[]>;
  public currentHotel: IHotel;
  public searchHotel: string;

  public constructor(
    private hotelService: HotelsService,
  ) { }

  public ngOnInit(): void {
    this.getHotels(this.page);
    setTimeout(() => {
      this.isLoading$ = of(false);
    }, 1500 );
  }

  public getHotels(event: PageEvent){
    this.hotels$ = this.hotelService.getHotels(event);
    // TODO: set dafault hotels
    // get first element on array
  }

  public setHotel(hotel: IHotel): void {
    this.currentHotel = hotel;
  }

  public search(event: Event): void {
    this.searchHotel = (event.target as HTMLInputElement).value;
  }

  public changeHotel(event: PageEvent): void {
    this.page = event;
    this.getHotels(event);
  }
}