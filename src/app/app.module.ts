// main core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, isDevMode } from '@angular/core'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule, DatePipe } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { FormsModule } from '@angular/forms'

// redux
import { reducers } from './store/app.states'

// components
import { HomeComponent } from './pages/home/home.component'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { IssuesComponent } from './components/issues/issues.component'
import { SpinnerComponent } from './components/spinner/spinner.component'
import { ResultsComponent } from './pages/results/results.component'
import { PaginatorComponent } from './components/paginator/paginator.component'
import { FormSearchComponent } from './components/form-search/form-search.component'
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ServiceWorkerModule } from '@angular/service-worker'

@NgModule({
  declarations: [
    FormSearchComponent,
    HeaderComponent,
    HomeComponent,
    AppComponent,
    ResultsComponent,
    IssuesComponent,
    PaginatorComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LazyLoadImageModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      // registrationStrategy: 'registerWhenStable:30000'
      registrationStrategy: 'registerImmediately'
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
