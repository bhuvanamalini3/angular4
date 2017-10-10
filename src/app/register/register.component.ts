import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogRegisterComponent } from '../my-dialog-register/my-dialog-register.component';
import {MatGridListModule} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OpenDialog1(){
  	let dialogRef = this.dialog.open(MyDialogRegisterComponent,{
  	width: "600px",
  	data: "this data comes from popup.component.ts opendialog function"
  });
  }
}
