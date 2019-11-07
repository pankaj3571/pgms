import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {CommonService} from '../common-service/common.service'
import { ToastrService } from 'ngx-toastr';
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
  constructor(private router:Router,private service:CommonService,private toastr:ToastrService) { }

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
    if(data['success']==true){
      this.toastr.success('Building number added successfully')
      this.getBuildings();
    }
    else{
      this.toastr.warning(data['message'])
    }


      console.log(data,"object=======")
  })
}
getBuildings(){
let message
  this.service.getBuildings().subscribe(data=>{

    this.result=data['result'];
    if(this.result==''){
    this.toastr.info('Add Building Number')
    }


  })
}
}
