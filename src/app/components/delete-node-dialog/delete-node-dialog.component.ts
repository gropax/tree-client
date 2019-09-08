import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bgr-delete-node-dialog',
  templateUrl: './delete-node-dialog.component.html',
  styleUrls: ['./delete-node-dialog.component.css']
})
export class DeleteNodeDialogComponent {

  name: string;
  descendents: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteNodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = data.name;
    this.descendents = data.descendents;
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm() {
    this.dialogRef.close(true);
  }
}
