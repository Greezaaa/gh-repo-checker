import { async, TestBed } from '@angular/core/testing';
import { IssuesComponent } from './issues.component';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/app.states';
import { DatePipe } from '@angular/common';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let store: Store<AppStore>;
  let datePipe: DatePipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesComponent ],
      providers: [
        { provide: Store, useValue: {} },
        { provide: DatePipe, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    datePipe = TestBed.get(DatePipe);
    component = new IssuesComponent(store, datePipe);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform the date using the DatePipe', () => {
    const date = '2022-01-01';
    const expectedDate = '01-Jan-2022';
    expect(component.transformDate(date)).toEqual(expectedDate);
  });
});
