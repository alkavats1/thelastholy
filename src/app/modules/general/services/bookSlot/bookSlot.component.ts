import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {SharedService} from "../../../../shared/shared.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AppConstants} from "../../../../app.constant";
import {BookSlotResponseModel} from "../../../../model/support-response.model";
import {BookSlotRequest} from "./bookSlot";
import {BookSlotValidationMessages} from "./bookSlot-validation-messages";

@Component({
  selector: 'app-bookSlot',
  templateUrl: './bookSlot.component.html',
  styleUrls: ['./bookSlot.component.css']
})
export class BookSlotComponent {

  bookSlotForm: FormGroup;
  bookSlotValidationMessages = BookSlotValidationMessages;
  bookSlotResponse!: BookSlotResponseModel;
  consoleErrorMessage!: string;
  @ViewChild(FormGroupDirective, {static: false}) mySupportForm: any;

  constructor(private formBuilder: FormBuilder, private supportService: SharedService, private router: Router, private toaster: ToastrService) {
    this.bookSlotForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(254)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(AppConstants.emailPattern),
        Validators.maxLength(254)
      ])],
      phone: ['', Validators.compose([
        Validators.required,
      ])],
      date: ['', Validators.compose([
        Validators.required,
      ])],
      time: ['', Validators.compose([
        Validators.required,
      ])],
      noOfPeople: ['', Validators.compose([
        Validators.required,
      ])],
      message: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(254)
      ])],
    });
  }

  onSubmit() {
    const bookSlotRequest = new BookSlotRequest(
      this.bookSlotForm.value.name,
      this.bookSlotForm.value.email,
      this.bookSlotForm.value.phone,
      this.bookSlotForm.value.date,
      this.bookSlotForm.value.time,
      this.bookSlotForm.value.noOfPeople,
      this.bookSlotForm.value.message,
    );
    console.log(bookSlotRequest);
    console.log(this.bookSlotForm);
    if (this.bookSlotForm.valid) {
      this.supportService.bookSlotForm(bookSlotRequest).subscribe((response: BookSlotResponseModel) => {
        this.bookSlotResponse = response;
        console.log(this.bookSlotResponse.response);
        this.toaster.success("Thanks for submitting. Slot is Booked. We'/'ll contact you soon");
        this.router.navigate(['/chitaAsthal'])
        this.resetForm();
      }, (error: Error) => {
        console.error(error.message, AppConstants.errorPopTitle);
      });
    } else {
      this.toaster.error('Please enter valid values', AppConstants.errorPopTitle);
    }
  }

  resetForm() {
    this.mySupportForm.resetForm();
  }

}
