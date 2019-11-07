import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../common-service/common.service'
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  result: any;
  selectedIndex:number=-1;
  resultArray:any=[];
  id: any;
  name:any;
  address:any;
  pan:any;
  aadhar:any;
  building_num:any;
  room_num:any;
  constructor(private router:Router,private service:CommonService) { }

  ngOnInit() {
    this.getDetails();
  }
  addDetails(){
    this.router.navigate(['/addDetails'])
  }
  getDetails(){
    this.service.getPgDetail().subscribe(data => {
      // console.log(window.sessionStorage.getItem("object_id"),"sessionStorage.getItem('object_id')")
      this.result = data['data']
      .filter(function(x) {
        return x.id === window.sessionStorage.getItem("object_id");

      });
      console.log('result',this.result);

    })
  }
  getData(index:number){
    this.selectedIndex = index;
    console.log(this.selectedIndex,"index=====")
    var selectedRow = this.result[index];
     this.id=selectedRow.id;
     this.name=selectedRow.name
     this.address=selectedRow.address;
     this.pan=selectedRow.pan;
     this.aadhar=selectedRow.aadhar;
     this.building_num=selectedRow.building_num;
     this.room_num=selectedRow.room_num;
     console.log(this.id,this.name,"sghfdhgsfgsd")
  }
  updateData(){
  let obj={
    _id:this.id,
    name:this.name,
    address:this.address,
    pan:this.pan,
    aadhar:this.aadhar,
    building_num:this.building_num,
    room_num:this.room_num
  }
  console.log(obj,"object")
  if(obj._id === sessionStorage.getItem("object_id")){
    this.service.updateData(obj).subscribe(data=>{

      console.log(data,"update")
        this.getDetails();
      })
  }

  }
  delete(index:any){
    this.selectedIndex = index;
    console.log(this.selectedIndex,"index=====")
    var selectedRow = this.result[index];
     this.id=selectedRow.id;
     let obj={
       _id:this.id
     }
     this.service.deleteData(obj).subscribe(data=>{
      console.log(data,"data");
      this.getDetails();
     })
  }
}
