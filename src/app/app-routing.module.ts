import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TreeListPageComponent } from './pages/tree-list-page/tree-list-page.component';
import { NewTreePageComponent } from './pages/new-tree-page/new-tree-page.component';
import { TreeViewPageComponent } from './pages/tree-view-page/tree-view-page.component';
import { TreeDetailsPageComponent } from './pages/tree-details-page/tree-details-page.component';


const routes: Routes = [
  { path: 'trees', component: TreeListPageComponent },
  { path: 'trees/new', component: NewTreePageComponent },
  { path: 'trees/:guid', component: TreeViewPageComponent },
  { path: 'trees/:guid/details', component: TreeDetailsPageComponent },
  { path: '', redirectTo: '/trees', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
