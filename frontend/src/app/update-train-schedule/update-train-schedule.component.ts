import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-train-schedule',
  templateUrl: './update-train-schedule.component.html',
  styleUrls: ['./update-train-schedule.component.css'],
  //providers:[DemoService]
})
export class UpdateTrainScheduleComponent implements OnInit {

    traindetails:any=[];
    traindetail:any=[];
    trainsS:any=[];
    
  
   
    constructor(private demoservice:DemoService, private route: ActivatedRoute, private router:Router) {
     
     }
      
  
    ngOnInit() {
  
     this.demoservice.getAllTrainsS().subscribe((data)=>{

        this.traindetails=data;
        console.log(data);
      });
      
      this.demoservice.getAllTrains().subscribe((data)=>{

        this.traindetail=data;
        console.log(data);
      });
  
      let id=parseInt(this.route.snapshot.paramMap.get('id'));
       this.demoservice.getSByID(id).subscribe(res => {
        this.trainsS = res;
      });
  //  });
    
  }
    
  updateTrainS(TrainName,TrainType,Classes,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,StartStation,EndStation,id) {
    this.route.params.subscribe(params => {
      this.demoservice.updateTrainS(TrainName,TrainType,Classes,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,StartStation,EndStation,params.id);
      
       this.router.navigate(['train_schedule']);
    //  location.reload();
      
      
    });
    
  }
  
}


