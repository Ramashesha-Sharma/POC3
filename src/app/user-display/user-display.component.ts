import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserRegistrationServiceService } from '../user-registration-service.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  users:any;
  constructor(private http:HttpClient,private service:UserRegistrationServiceService) { }
  public delteUser(id:number){
    
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }
  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/User");
    response.subscribe((data)=>this.users=data);
  }

  orderProperty:string="id";
val=true;
toggleSort(order:string){
  if(this.val==true){
    this.val=false;
  }else
    this.val=true;
  this.orderProperty=order;
}
}
