import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { DriversComponent } from './drivers/drivers.component';
import {DemoService} from './service/demo.service';
//import { DriverDetailsComponent } from './driver-details/driver-details.component';
//import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { TrainDetailsComponent } from './train-details/train-details.component';
import { AddTrainComponent } from './/add-train/add-train.component';
import { EditTrainComponent } from './edit-train/edit-train.component';
import { TrainSheduleComponent } from './train-shedule/train-shedule.component';
import { UpdateTrainSheduleComponent } from './update-train-shedule/update-train-shedule.component';
import { AddTrainSheduleComponent } from './add-train-shedule/add-train-shedule.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {AuthService} from './auth.service';
import { AddTrainScheduleComponent } from './add-train-schedule/add-train-schedule.component';
import { UpdateTrainScheduleComponent } from './update-train-schedule/update-train-schedule.component';
import { TrainScheduleComponent } from './train-schedule/train-schedule.component';
//import {FlashMessagesModule} from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   // DriversComponent,
   // DriverDetailsComponent,
    //UpdateDriverComponent,
    TrainDetailsComponent,
    AddTrainComponent,
    EditTrainComponent,
    TrainSheduleComponent,
    UpdateTrainSheduleComponent,
    AddTrainSheduleComponent,
    RegisterComponent,
    HomeComponent,
    AddTrainScheduleComponent,
    UpdateTrainScheduleComponent,
    TrainScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
   // FlashMessagesModule

  ],
  providers: [DemoService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
