import {user} from './user';

export class purchaserequest{
	Id: number;
	User: user;
  UserName: string;
	Description: string;
	Justification: string;
  DateNeeded: Date;
	DeliveryMode: string;
	Total: number;
	SubmittedDate: Date;
  ReasonForRejection: string
	
	about(): string {
	 return('User = ' + this.User)
	}
constructor(Id:number=0, User: user =null, Description: string = '', Justification: string = '',
DateNeeded: Date =null, DeliveryMode: string = '', Total: number =0, SubmittedDate: Date =null,
ReasonForRejection: string = '') {
		this.Id = Id;
    this.User=User;
		this.Description = Description;
		this.Justification = Justification;
		this.DateNeeded = DateNeeded;
		this.DeliveryMode = DeliveryMode;
    this.Total = Total;
    this.SubmittedDate = SubmittedDate;
    this.ReasonForRejection = ReasonForRejection;
	}
}