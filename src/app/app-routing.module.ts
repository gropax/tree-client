import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TreeListPageComponent } from './tree-list-page/tree-list-page.component';
import { NewTreePageComponent } from './new-tree-page/new-tree-page.component';
import { TreeViewPageComponent } from './tree-view-page/tree-view-page.component';


const routes: Routes = [
  { path: 'trees', component: TreeListPageComponent },
  { path: 'trees/new', component: NewTreePageComponent },
  { path: 'trees/:guid', component: TreeViewPageComponent },
  { path: '', redirectTo: '/trees', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
