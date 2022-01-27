import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationServiceService {

  constructor(private http:HttpClient) { }

  
  public doRegistration(user){
    return this.http.post("http://localhost:8080/User",user,{responseType:'text' as 'json'});
  }
  public getUserByText(fname){
    return this.http.get("http://localhost:8080/User/search/all/"+fname+"/"+fname+"/"+fname);
  }
  public getUsers(){
    return this.http.get("http://localhost:8080/User");
  }
 

  public deleteUser(id){
    return this.http.delete("http://localhost:8080/User/delete/"+id);
  } 

  public SortUsers(field){
    return this.http.get("http://localhost:8080/user/sort?field="+field);
}
  public getUserById(id){
    return this.http.get("http://localhost:8080/User/id/"+id);
  }
  public updateUser(id,user){
    return this.http.put("http://localhost:8080/User/edit/"+id,user,{responseType:'text' as 'json'});
  }

}
