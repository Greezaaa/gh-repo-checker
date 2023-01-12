import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { IssuesComponent } from '../../components/issues/issues.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers),
      ],
      declarations: [
        ResultsComponent,
        SpinnerComponent,
        PaginatorComponent,
        IssuesComponent,
      ],
      providers: [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
