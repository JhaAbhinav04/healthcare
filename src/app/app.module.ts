import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { PlaceAppointmentsComponent } from './place-appointments/place-appointments.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewAppointmentsComponent,
    PlaceAppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
