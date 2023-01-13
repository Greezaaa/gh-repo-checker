import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// pages
import { HomeComponent } from './pages/home/home.component'
import { ResultsComponent } from './pages/results/results.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
