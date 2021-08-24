import { Component, OnInit } from '@angular/core';
import { DialagoComponent } from './dialago/dialago.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginDialago();
  }

  loginDialago(): void {
    const dialogRef = this.dialog.open(DialagoComponent, {
      width: '350px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
