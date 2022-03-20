import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrumaComponent } from './add-truma/add-truma.component';
import { TrumotListComponent } from './trumot-list/trumot-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/addTruma', pathMatch: 'full' },
  { path: 'addTruma', component: AddTrumaComponent },
  { path: 'trumotList', component: TrumotListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
