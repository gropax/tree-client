import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'bgr-new-node-dialog',
  templateUrl: './new-node-dialog.component.html',
  styleUrls: ['./new-node-dialog.component.css']
})
export class NewNodeDialogComponent {

  name: string;

  constructor(public dialogRef: MatDialogRef<NewNodeDialogComponent>) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
