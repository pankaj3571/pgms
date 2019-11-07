import {Injectable} from '@angular/core';
import {appSetting} from '../app.setting';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn:'root'
})
export class CommonService{
  constructor(private httpClient:HttpClient){}

  AddDetails(obj:any){
    return this.httpClient.post(appSetting.AddDetails,obj)
  }
  AddBuilding(obj:any){
    return this.httpClient.post(appSetting.AddBuilding,obj)
  }
  getBuildings(){
    return this.httpClient.get(appSetting.GetBuildingData);
  }
  getPgDetail(){
    return this.httpClient.get(appSetting.GetPGdetails);
  }
  updateData(obj:any){
return this.httpClient.post(appSetting.UpdateData,obj);
  }
  deleteData(obj:any){
    return this.httpClient.post(appSetting.Delete,obj);
  }
}
