import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { MetadataComponent } from './components/metadata/metadata.component';


@NgModule({
  declarations: [
    MetadataComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    MetadataComponent,
  ],
})
export class BgrResourceModule { }
