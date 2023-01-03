//main core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, isDevMode } from '@angular/core'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { FormsModule } from '@angular/forms'

//redux
import { reducers } from './store/app.states'

//components
import { FormSearchComponent } from './components/form-search/form-search.component'
import { HomeComponent } from './pages/home/home.component'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { ResultsComponent } from './pages/results/results.component'

@NgModule({
  declarations: [
    FormSearchComponent,
    HeaderComponent,
    HomeComponent,
    AppComponent,
    ResultsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
