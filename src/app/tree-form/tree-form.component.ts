import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export class UpsertTree {
  constructor(
    public name: string,
    public description: string) {
  }
}

@Component({
  selector: 'tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.css']
})
export class TreeFormComponent {

  @Output() submited = new EventEmitter<UpsertTree>();
  @Output() cancel = new EventEmitter();

  treeForm = this.fb.group({
    name: [null, Validators.required],
    description: null,
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    let content = this.treeForm.value;
    let upsertTree = new UpsertTree(content.name, content.description);
    this.submited.emit(upsertTree);
  }
}
