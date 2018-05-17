export class user{
	Id: number;
	UserName: string;
	Password: string;
	FirstName: string;
	LastName: string;
	PhoneNumber: string;
	Email: string;
	Reviewer: boolean;
	Admin: boolean;
	
	about(): string {
	 return('UserName = ' + this.UserName + 'FirstName ='+this.FirstName)
	}
	
	constructor(Id:number=0, uName:string ='', pw:string = '', fName:string = '', lName:string = '', pNum:string = '', Email:string = '', Reviewer: boolean = false, Admin: boolean = false) {
		this.Id = Id;
		this.UserName = uName;
		this.Password = pw;
		this.FirstName = fName;
		this.LastName = lName;
		this.PhoneNumber = pNum;
    this.Email = Email;
		this.Reviewer = Reviewer;
		this.Admin = Admin;
	}
}