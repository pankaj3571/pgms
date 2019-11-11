import { Component, OnInit } from '@angular/core';
import {CommonService} from  '../common-service/common.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

         name:String;
        address:String;
        pan:String;
        aadhar:Number;
        building_num:String;
        room_num:String;
        result: any;
        selectedIndex:number=-1;
        resultArray:any=[];
         id: any;
         selectedvalue:any
         build_no:any;
  constructor(private commonService:CommonService,private toastr:ToastrService) { }

  ngOnInit() {
    this.getBuilding();
  }


  getBuilding(){
    this.build_no=
    this.commonService.getBuildings().subscribe(data=>{
      this.result=data['result']
      .filter(function(x){

       return x.building_num == window.sessionStorage.getItem("build_id")
      })
      console.log(this.result,"result")
      console.log(this.result.building_num,"result")

    })

  }
  AddPersonData(event:any,index:number){
    console.log('result', this.result);
    console.log('selectedValue', event);
    this.selectedvalue=event.target.value;
    // onsole.log(this.selectedvalue,"seectedValue===")
    this.selectedIndex = this.selectedvalue;
    console.log(this.selectedIndex,"index=====")
    var selectedRow = this.result[0]
    // [this.selectedvalue - 1];
    console.log(selectedRow,"id=======")

     this.id=selectedRow._id;
     console.log(this.id,"id=======")
  //   if(this.id !=null){
  //     this.router.navigate(['/rooms']);
  //   }
  // else{
  //   alert('something went wrong')
  // }
  }
  AddData(){
    let obj={
      id:this.id,
      name:this.name,
      address:this.address,
      pan:this.pan,
      aadhar:this.aadhar,
      building_num:this.selectedvalue,
      room_num:this.room_num
    }
    console.log(obj,"object=====")
    this.commonService.AddDetails(obj).subscribe(data=>{
      if(data['success']==true){
        this.toastr.success('Person Add Successfully')
      }
    })
  }
}
