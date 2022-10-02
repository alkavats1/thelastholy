export class EnquiryRequest {
  name: string;
  email: string;
  phone: number;
  category: string;
  message: string;

  constructor(name: string, email: string, phone: number, category: string, message: string, ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.category = category;
    this.message = message;
  }
}
