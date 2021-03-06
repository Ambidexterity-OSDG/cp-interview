import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-dialog',
  templateUrl: './pdf-dialog.component.html',
  styleUrls: ['./pdf-dialog.component.css']
})
export class PdfDialogComponent implements OnInit {
  pdfUrl = "";
  constructor(public dialogRef: MatDialogRef<PdfDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data) {
      this.pdfUrl = this.data.pdfUrl
    }
  }

  close(){
    this.dialogRef.close(this.data);
  }

}
