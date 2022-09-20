import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialogBox',
  templateUrl: './dialogBox.component.html',
  styleUrls: ['./dialogBox.component.css']
})
export class DialogBoxComponent  {
  message!: string;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
