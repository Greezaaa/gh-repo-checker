import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormSearchComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
