export class BookSlotValidationMessages {
  static errorMessages = {
    name: [
      {type: 'required', message: 'Name is required'},
      {type: 'maxlength', message: 'Name must be less then 254 characters and greater then 2 character'},
    ],
    email: [
      {type: 'required', message: 'Email is required'},
      {type: 'pattern', message: 'Please enter a valid email address'},
    ],
    phone: [
      {type: 'required', message: 'Number is required'},
      {type: 'pattern', message: 'Please enter a valid email address'},
    ],
    date: [
      {type: 'required', message: 'Date is required'},
      {type: 'maxlength', message: 'Message must be less than 255 characters and greater then 1 character'},
    ],
    time: [
      {type: 'required', message: 'Time is required'},
      {type: 'maxlength', message: 'Message must be less than 255 characters and greater then 1 character'},
    ],
    noOfPeople: [
      {type: 'required', message: 'No. Of People is required'},
      {type: 'maxlength', message: 'Message must be less than 255 characters and greater then 1 character'},
    ],
    message: [
      {type: 'required', message: 'Message is required'},
      {type: 'maxlength', message: 'Message must be less than 255 characters and greater then 1 character'},
    ]
  };
}
