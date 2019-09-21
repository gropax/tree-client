import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { MarkdownModule } from 'ngx-markdown';

import { MetadataComponent } from './components/metadata/metadata.component';
import { ResourceContentComponent } from './components/resource-content/resource-content.component';
import { PageContentSpinnerComponent } from './components/page-content-spinner/page-content-spinner.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TopbarService } from './services/topbar.service';


@NgModule({
  declarations: [
    MetadataComponent,
    ResourceContentComponent,
    PageContentSpinnerComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    MetadataComponent,
    ResourceContentComponent,
    PageContentSpinnerComponent,
  ],
})
export class BgrResourceModule { }
