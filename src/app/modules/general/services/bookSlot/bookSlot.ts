export class BookSlotRequest {
  name: string;
  email: string;
  phone: number;
  date: string;
  time: string;
  noOfPeople: number;
  message: string;
  constructor(name: string, email: string, phone: number,date: string,time:string,noOfPeople:number, message: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
    this.date = date;
    this.time = time;
    this.noOfPeople = noOfPeople
  }
}
