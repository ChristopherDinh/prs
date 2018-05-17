export class vendor {
  Id: number;
  Code: string;
  Name: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  PhoneNumber: string;
  Email: string;
  PreApproved: boolean;
  
  about(): string {
    return('Name = ' + this.Name)
  }
  constructor(id:number=0, code:string ='', name:string = '', address:string = '', city:string = '', state:string = '', zip:string = '', phoneNumber:string = '', email: string = '', preApproved:boolean = false) {
		this.Id = id;
		this.Code = code;
		this.Name = name;
		this.Address = address;
		this.City = city;
		this.State = state;
    this.Zip = zip;
		this.PhoneNumber = phoneNumber;
		this.Email = email;
    this.PreApproved = preApproved;
	}
}