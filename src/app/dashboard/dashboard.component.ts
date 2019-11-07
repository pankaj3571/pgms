import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {CommonService} from '../common-service/common.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  test:any;
  building_num:Number;
  room_num:Number;
  result: any;
  selectedIndex:number=-1;
  resultArray:any=[];
  id: any;
  constructor(private router:Router,private service:CommonService) { }

  ngOnInit() {
    this.getBuildings();
  }
click(index:number){

  this.selectedIndex = index;
  console.log(this.selectedIndex,"index=====")
  var selectedRow = this.result[index];
   this.id=selectedRow._id;
   window.sessionStorage.clear();
   window.sessionStorage.setItem('object_id',this.id);

  if(this.id !=null){

    this.router.navigate(['/rooms']);
  }

}
addBuilding(){
  let obj={
    building_num:this.building_num,
    room_num:this.room_num
  }
  this.service.AddBuilding(obj).subscribe(data=>{
    this.getBuildings();
      console.log(data,"object=======")
  })
}
getBuildings(){
  this.service.getBuildings().subscribe(data=>{
    this.result=data['result'];
    console.log(this.result,"=====")
  })
}
}
