import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserRegistrationServiceService } from '../user-registration-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user: User=new User("","",new Date(),new Date(),"","");
  message:any;

  constructor(private service:UserRegistrationServiceService) { }

  ngOnInit() {
  }
  

  public registerNow(){
let resp=this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);
  }

}

