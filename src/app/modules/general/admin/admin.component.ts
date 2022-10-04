import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {EnquiryResponseModel} from "../../../model/support-response.model";
import {AppConstants} from "../../../app.constant";
import {SharedService} from "../../../shared/shared.service";
import {EnquiryRequest} from "../../../shared/enquiryForm/enquiry";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  tableData!: EnquiryRequest[];
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'email', 'phone', 'category', 'message'];

  constructor(private supportService: SharedService, private router: Router) {
  }

  ngOnInit(): void {
    this.getData()


  }

  getData() {
    this.supportService.getEnquireData().subscribe((response: EnquiryResponseModel) => {
      console.log(response.response);
      this.tableData = response.response;
      this.dataSource.data = this.tableData;
    }, (error: Error) => {
      console.error(error.message, AppConstants.errorPopTitle);
    });

  }

}

