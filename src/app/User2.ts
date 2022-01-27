export class User2{
    
    
    constructor(
        id:number,
      fname:string,
      surname:string,
      dob:Date,
      joiningDate:Date,
      mobileNo:string,
      pincode:string,
      deleted:boolean
    ){
        this.id=id;
        this.fname=fname;
        this.surname=surname;
        this.dob=dob;
        this.joiningDate=joiningDate;
        this.mobileNo=mobileNo;
        this.pincode=pincode;
        this.deleted=deleted;
    }

id:number;
    fname:string;
      surname:string;
      dob:Date;
      joiningDate:Date;
      mobileNo:string;
      pincode:string;
      deleted:boolean;
  }