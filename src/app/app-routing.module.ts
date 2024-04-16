import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceAppointmentsComponent } from './place-appointments/place-appointments.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';

// const routes: Routes = [
//   {
//     path: 'place-appointments',
//     component: PlaceAppointmentsComponent,
//   },
//   {
//     path: 'view-appointments',
//     component: ViewAppointmentsComponent,
//   },
// ];

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'view-appointments', component: ViewAppointmentsComponent },
  { path: 'place-appointments', component: PlaceAppointmentsComponent },
  // { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
