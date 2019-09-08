import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, AbstractControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bgr-rename-node-dialog',
  templateUrl: './rename-node-dialog.component.html',
  styleUrls: ['./rename-node-dialog.component.css']
})
export class RenameNodeDialogComponent {

  renameNodeForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<RenameNodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    var currentName = data.name;

    this.renameNodeForm = this.fb.group({
      name: [currentName, this.differentThan(currentName)],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.renameNodeForm.valid)
      this.dialogRef.close(this.renameNodeForm.value.name);
  }

  differentThan<T>(value: T) {
    return (control: AbstractControl) =>
      control.value === value ? { different: true } : null;
  }
}
