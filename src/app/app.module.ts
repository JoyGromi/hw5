import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsComponent } from './hotels/hotels.component';
import { ListComponent } from './hotels/list/list.component';
import { WeatherComponent } from './hotels/weather/weather.component';
import { ProfileComponent } from './hotels/profile/profile.component';
// import { MaterialModule }   from "@angular/material";
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout/';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FilterPipe } from './pipes/filter.pipe';
import { FavoriteComponent } from './hotels/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HotelsComponent,
    ListComponent,
    WeatherComponent,
    ProfileComponent,
    FilterPipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // MaterialModule.forRoot,
    BrowserAnimationsModule,
    MatListModule, MatCardModule, MatInputModule,
    MatButtonModule, MatIconModule, MatBadgeModule, MatPaginatorModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
