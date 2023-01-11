import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IssuesComponent } from './issues.component'
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';

describe('IssuesComponent', () => {
  let component: IssuesComponent
  let fixture: ComponentFixture<IssuesComponent>

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
      declarations: [ IssuesComponent ],
      providers: [DatePipe]
    })
    .compileComponents()

    fixture = TestBed.createComponent(IssuesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should transform the date using the DatePipe', () => {
    const date = '2022-01-01';
    const expectedDate = '01-Jan-2022';
    expect(component.transformDate(date)).toEqual(expectedDate);
  });
});
