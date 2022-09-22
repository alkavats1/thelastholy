import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {SupportValidationMessages} from "./enquiry-validation-messages";
import {SupportResponseModel} from "../../model/support-response.model";
import {Router} from "@angular/router";
import {AppConstants} from "../../app.constant";
import {SupportRequest} from "./enquiry";
import {ToastrService} from "ngx-toastr";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-enquiryForm',
  templateUrl: './enquiryForm.component.html',
  styleUrls: ['./enquiryForm.component.css']
})
export class EnquiryFormComponent {

  supportForm: FormGroup;
  supportValidationMessages = SupportValidationMessages;
  supportResponse!: SupportResponseModel;
  consoleErrorMessage!: string;
  @ViewChild(FormGroupDirective, {static: false}) mySupportForm: any;

  constructor(private formBuilder: FormBuilder, private supportService: SharedService, private router: Router, private toaster: ToastrService) {
    this.supportForm = this.formBuilder.group({
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
      message: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(254)
      ])],
      subject: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(254)
      ])]
    });
  }

  onSubmit() {
    const supportRequest = new SupportRequest(
      this.supportForm.value.name,
      this.supportForm.value.email,
      this.supportForm.value.phone,
      this.supportForm.value.message,
      this.supportForm.value.subject,
    );
    console.log(supportRequest);
    console.log(this.supportForm);
    if (this.supportForm.valid) {
      this.supportService.submitSupportForm(supportRequest).subscribe((response: SupportResponseModel) => {
        this.supportResponse = response;
        console.log(response.response);
        this.toaster.success("Thanks for submitting. We'/'ll contact you soon");
        this.router.navigate(['/about'])
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
