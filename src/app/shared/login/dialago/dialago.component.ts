import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialago',
  templateUrl: './dialago.component.html',
  styleUrls: ['./dialago.component.css']
})
export class DialagoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialagoComponent>
  ) { }

  ngOnInit(): void {
  }

  fecharDialago(): void {
    this.dialogRef.close();
  }

}
