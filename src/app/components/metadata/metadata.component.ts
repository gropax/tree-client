import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export interface IResource {
  guid: string,
  createdAt: Date,
  updatedAt: Date,
}

@Component({
  selector: 'bgr-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  @Input() resource: IResource;

  metadataForm = this.fb.group({
    guid: null,
    createdAt: null,
    updatedAt: null,
  });

  constructor(private fb: FormBuilder) {
    this.metadataForm.disable();
  }

  ngOnInit() {
  }

}
