import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ContactService} from "../contact/contact.service";
import {Router} from "@angular/router";
import {SupportResponseModel} from "../../../model/support-response.model";
import {AppConstants} from "../../../app.constant";
import {SupportRequest} from "../contact/support";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  tableData! : SupportRequest[];
  dataSource = new MatTableDataSource();

  constructor(private supportService: ContactService, private router: Router ) {
  }

  ngOnInit(): void {
    this.getData()


  }

  getData(){
    this.supportService.getSupportData().subscribe((response: SupportResponseModel) => {
      console.log(response.response);
      this.tableData = response.response;
      this.dataSource.data = this.tableData;
    }, (error: Error) => {
      console.error(error.message, AppConstants.errorPopTitle);
    });

  }
  displayedColumns: string[] = ['name', 'email', 'phone','message', 'subject'];

}

