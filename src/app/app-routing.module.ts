import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { HomeComponent } from './pages/home/home.component';
import { RepoInfoComponent } from './pages/repo-info/repo-info.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'repo-info', component: RepoInfoComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }