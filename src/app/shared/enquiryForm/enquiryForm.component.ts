import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {SupportValidationMessages} from "./enquiry-validation-messages";
import {SupportResponseModel} from "../../model/support-response.model";
import {Router} from "@angular/router";
import {AppConstants} from "../../app.constant";
import {ToastrService} from "ngx-toastr";
import {SharedService} from "../shared.service";
import {EnquiryRequest} from "./enquiry";

@Component({
  selector: 'app-enquiryForm',
  templateUrl: './enquiryForm.component.html',
  styleUrls: ['./enquiryForm.component.css']
})
export class EnquiryFormComponent {

  enquiryForm: FormGroup;
  supportValidationMessages = SupportValidationMessages;
  enquireResponse!: SupportResponseModel;
  consoleErrorMessage!: string;
  categories: any = ['Hearse Ambulance Service', 'Arthi and Matki Service', 'Asthi Visarjan Services', 'Kafan', 'Freezer Box', 'Chita Asthal Service', 'Vishram Asthal Service', 'Pandit Ji At Crematorium', 'Pooja Samagree', 'Pind-Daan(Online/Offline)', 'Sevadaar for Kandha Dena', 'Flowers', 'Dead Body Transportation'];
  @ViewChild(FormGroupDirective, {static: false}) myenquiryForm: any;

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, private router: Router, private toaster: ToastrService) {
    this.enquiryForm = this.formBuilder.group({
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
      category: ['', Validators.compose([
        Validators.required,
      ])]
    });
  }

  get category() {
    return this.enquiryForm.get('category');
  }

  changeCategory(e: any) {
    this.category?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onSubmit() {
    const enquireRequest = new EnquiryRequest(
      this.enquiryForm.value.name,
      this.enquiryForm.value.email,
      this.enquiryForm.value.phone,
      this.enquiryForm.value.category,
      this.enquiryForm.value.message,
    );
    console.log(enquireRequest);
    console.log(this.enquiryForm);
    if (this.enquiryForm.valid) {
      this.sharedService.submitEnquireForm(enquireRequest).subscribe((response: SupportResponseModel) => {
        this.enquireResponse = response;
        console.log(response.response);
        this.toaster.success("Thanks for submitting. We'/'ll contact you soon");
        this.router.navigate(['/home'])
        this.resetForm();
      }, (error: Error) => {
        console.error(error.message, AppConstants.errorPopTitle);
      });
    } else {
      this.toaster.error('Please enter valid values', AppConstants.errorPopTitle);
    }
  }

  resetForm() {
    this.myenquiryForm.resetForm();
  }
}
