import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { TreeDetailsPageComponent } from './pages/tree-details-page/tree-details-page.component';


import { TimeAgoPipe } from 'time-ago-pipe';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MainTopbarComponent } from './layout/main-topbar/main-topbar.component';
import { ActionTopbarComponent } from './layout/action-topbar/action-topbar.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TreeListPageComponent } from './pages/tree-list-page/tree-list-page.component';
import { TreeViewPageComponent } from './pages/tree-view-page/tree-view-page.component';
import { NewTreePageComponent } from './pages/new-tree-page/new-tree-page.component';

import { TreeListComponent } from './components/tree-list/tree-list.component';
import { TreeFormComponent } from './components/tree-form/tree-form.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';

import { BgrResourceModule } from './bgr-resource/bgr-resource.module';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TreeListComponent,
    PageNotFoundComponent,
    TreeListPageComponent,
    TimeAgoPipe,
    NewTreePageComponent,
    TreeFormComponent,
    TreeViewPageComponent,
    TreeViewComponent,
    SidenavComponent,
    MainTopbarComponent,
    ActionTopbarComponent,
    TreeDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTreeModule,

    BgrResourceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
