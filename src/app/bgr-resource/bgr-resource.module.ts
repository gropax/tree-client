import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { MarkdownModule } from 'ngx-markdown';

import { MetadataComponent } from './components/metadata/metadata.component';
import { ResourceContentComponent } from './components/resource-content/resource-content.component';


@NgModule({
  declarations: [
    MetadataComponent,
    ResourceContentComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    MetadataComponent,
    ResourceContentComponent,
  ],
})
export class BgrResourceModule { }
