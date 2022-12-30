//main core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

//redux
import { reducers } from './reduxStates/app.states';

//material UI
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';

//components
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { AppComponent } from './app.component';
import { RepoInfoComponent } from './pages/repo-info/repo-info.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    FormSearchComponent,
    IssueListComponent,
    HeaderComponent,
    HomeComponent,
    AppComponent,
    PaginatePipe,
    RepoInfoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
