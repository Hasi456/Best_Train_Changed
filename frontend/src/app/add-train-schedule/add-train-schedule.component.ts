import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import {Router} from '@angular/router';
import { Time } from '@angular/common';


@Component({
  selector: 'app-add-train-schedule',
  templateUrl: './add-train-schedule.component.html',
  styleUrls: ['./add-train-schedule.component.css'],
  providers:[DemoService]
})
export class AddTrainScheduleComponent implements OnInit {
  traindetails:any=[];
  TrainName:String;
  TrainType:String;
  Classes:String;
  StartStation:String;
  EndStation:String;
  Monday:number;
  Tuesday:number;
  Wednesday:number;
  Thursday:number;
  Friday:number;
  Saturday:number;
  Sunday:number;
  StopAt:String;
  

  constructor(private demoService:DemoService, private router:Router) { }

  
  ngOnInit() {
   
   this.demoService.getAllTrains().subscribe((data)=>{

      this.traindetails=data;
      console.log(data);
     

      
    });
}

  


save(){

  const trainS={
    TrainName:this.TrainName,
    TrainType:this.TrainType,
    Classes:this.Classes,
    StartStation:this.StartStation,
    EndStation:this.EndStation,
    Monday:this.Monday,
    Tuesday:this.Tuesday,
    Wednesday:this.Wednesday,
    Thursday:this.Thursday,
    Friday:this.Friday,
    Saturday:this.Saturday,
    Sunday:this.Sunday,
    StopAt:this.StopAt
  
   
    
  };

  console.log(trainS);

  

   this.demoService.saveTrainS(trainS).subscribe(res=>{
     console.log(res);
   //  if(res.state)
     //this.FlashMessage.show('Failed to insert', { cssClass: 'alert-dander', timeout: 2000 });
  //   alert("Failed to Insert");
    // else
     //this.FlashMessage.show('Added Successfully', {cssClass:'alert-success', timeout:2000});
    if(res.state){
      alert('Data Inserted!');
    }
      else{
      alert('data not inserted');
      }
      
   });
   
}

}




