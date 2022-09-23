export class SupportRequest {
  name: string;
  email: string;
  phone: number;
  message: string;
  subject: string;

  constructor(name: string, email: string, phone: number, message: string, subject: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
    this.subject = subject;
  }
}
