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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
//components
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { AppComponent } from './app.component';
import { RepoInfoComponent } from './pages/repo-info/repo-info.component';
import { ResultsComponent } from './pages/results/results.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    FormSearchComponent,
    HeaderComponent,
    HomeComponent,
    AppComponent,
    PaginatePipe,
    RepoInfoComponent,
    ResultsComponent,
    SpinnerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatListModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
