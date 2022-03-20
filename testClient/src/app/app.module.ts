import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrumaComponent } from './add-truma/add-truma.component';
import { TrumotListComponent } from './trumot-list/trumot-list.component';
import {MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule } from '@angular/material/checkbox';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCardModule } from '@angular/material/card';
import {MatMenuModule } from '@angular/material/menu';
import {MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrumaEditStateComponent } from './truma-edit-state/truma-edit-state.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AddTrumaComponent,
    TrumotListComponent,
    TrumaEditStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule, 
    MatIconModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
