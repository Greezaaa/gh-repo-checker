//main core
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//redux
import { reducers } from './states/app.states';
// import { reposReducer } from './states/reducers/repos.reducer'; // change to reducers if more then one store

//material UI
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';

//components
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    IssueListComponent,
    PaginatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatListModule,
    StoreModule.forRoot(reducers),
    // StoreModule.forRoot({ repos: reposReducer }), // capply this if more then one store
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
