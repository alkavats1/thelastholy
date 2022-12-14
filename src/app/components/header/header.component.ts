import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "../../shared/dialog-box/dialogBox.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      autoFocus: false,
      maxWidth: '1000px',
      maxHeight: '1000px',
      disableClose: false,
      panelClass: 'align-item-center'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
