import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bgr-new-node-dialog',
  templateUrl: './new-node-dialog.component.html',
  styleUrls: ['./new-node-dialog.component.css']
})
export class NewNodeDialogComponent {

  newNodeForm = this.fb.group({
    name: [null, Validators.required],
  });

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<NewNodeDialogComponent>) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.newNodeForm.valid)
      this.dialogRef.close(this.newNodeForm.value.name);
  }
}
