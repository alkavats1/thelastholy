import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {BookSlotResponseModel, EnquiryResponseModel, SupportResponseModel} from "../../../model/support-response.model";
import {AppConstants} from "../../../app.constant";
import {SharedService} from "../../../shared/shared.service";
import {EnquiryRequest} from "../../../shared/enquiryForm/enquiry";
import {SupportRequest} from "../../../shared/supportForm/support";
import {BookSlotRequest} from "../services/bookSlot/bookSlot";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  contactTableData!: SupportRequest[];
  enquiryTableData!: EnquiryRequest[];
  slotBookTableData!: BookSlotRequest[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'email', 'phone', 'date', 'time', 'noOfPeople', 'message'];
  contactColumns: string[] = ['name', 'email', 'phone', 'subject', 'message'];
  enquiryColumns: string[] = ['name', 'email', 'phone', 'category', 'message'];

  constructor(private supportService: SharedService, private router: Router) {
  }

  ngOnInit(): void {
    this.logChange(0)
  }

  logChange(index: any) {
    console.log(index);
    if (index === 0) {
      this.supportService.getSupportData().subscribe((response: SupportResponseModel) => {
        console.log(response.response);
        this.contactTableData = response.response;
        this.dataSource.data = this.contactTableData;
      }, (error: Error) => {
        console.error(error.message, AppConstants.errorPopTitle);
      });
    } else if (index === 1) {
      this.supportService.getEnquireData().subscribe((response: EnquiryResponseModel) => {
        console.log(response.response);
        this.enquiryTableData = response.response;
        this.dataSource.data = this.enquiryTableData;
      }, (error: Error) => {
        console.error(error.message, AppConstants.errorPopTitle);
      });
    } else if (index === 2) {
      this.supportService.getBookSlotData().subscribe((response: BookSlotResponseModel) => {
        console.log(response.response);
        this.slotBookTableData = response.response;
        this.dataSource.data = this.slotBookTableData;
      }, (error: Error) => {
        console.error(error.message, AppConstants.errorPopTitle);
      });
    } else {
      console.log('Error');
    }
  }
}

