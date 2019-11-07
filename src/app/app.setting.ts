import{environment} from '../environments/environment';
export const appSetting={
  AddDetails:environment.apiUrl+'/AddDetails',
  AddBuilding:environment.apiUrl+'/AddBuilding',
  GetBuildingData:environment.apiUrl+'/getBuildings',
  GetPGdetails:environment.apiUrl+'/getDetails',
  UpdateData:environment.apiUrl+'/update',
  Delete:environment.apiUrl+'/delete'
}
