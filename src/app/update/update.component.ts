import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { UserRegistrationServiceService } from '../user-registration-service.service';
import { User2 } from '../user2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  uid:string | null;
  id:number=0;
  user2:any;
  message:any;
  
  constructor(private http:HttpClient,private service:UserRegistrationServiceService,private activeRoute:ActivatedRoute) { 
    this.uid=activeRoute.snapshot.paramMap.get("id");
    if(this.uid!=null)
    this.id=parseInt(this.uid);
console.log(this.id);
let response = this.http.get("http://localhost:8080/User/id/"+this.uid);
response.subscribe((data)=>this.user2=data);

    
  }

  ngOnInit(): void {
    
  }

  public updateDetails(){
    let resp=this.service.updateUser(this.id,this.user2);
resp.subscribe((data)=>this.message=data);
  }
}
