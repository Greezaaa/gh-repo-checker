import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/app.states'
import { RepositoryService } from './services/repository.service'
import { FormSearchComponent } from './components/form-search/form-search.component'
import { HeaderComponent } from './components/header/header.component'
import { IssuesComponent } from './components/issues/issues.component'
import { PaginatorComponent } from './components/paginator/paginator.component'
import { SpinnerComponent } from './components/spinner/spinner.component'
import { HomeComponent } from './pages/home/home.component'
import { ResultsComponent } from './pages/results/results.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        AppComponent, FormSearchComponent, HeaderComponent, IssuesComponent, PaginatorComponent, SpinnerComponent,
        HomeComponent, ResultsComponent
      ],
      providers: [RepositoryService]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
