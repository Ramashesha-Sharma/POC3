export class User{
    
    
    constructor(
      fname:string,
      surname:string,
      dob:Date,
      joiningDate:Date,
      mobileNo:string,
      pincode:string
    ){
        this.fname=fname;
        this.surname=surname;
        this.dob=dob;
        this.joiningDate=joiningDate;
        this.mobileNo=mobileNo;
        this.pincode=pincode;
    }


    fname:string;
      surname:string;
      dob:Date;
      joiningDate:Date;
      mobileNo:string;
      pincode:string;
  }