import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
//pages
import { HomeComponent } from './pages/home/home.component'
import { RepoComponent } from './pages/repo/repo.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'repo', component: RepoComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }